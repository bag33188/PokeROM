const url = require('url');
const mongoose = require('mongoose');
const moment = require('moment');
const { validationResult } = require('express-validator/check');
const Rom = require('../models/Rom');
const romsData = require('../database/data.json');
const [, clearCache] = require('../middleware/cache');
// const all_routes = require('express-list-endpoints');

const routesWithParams = ['core', 'hacks'];

function convertToDateFormat(date) {
  if (date) {
    let dateArr = date.replace(/(&#[xX]2[Ff];)/g, '/').split('/');
    const year = dateArr[2];
    dateArr = dateArr.reverse();
    dateArr.shift();
    dateArr = dateArr.reverse();
    dateArr.unshift(year);
    const formattedDate = dateArr.join(',');
    return new Date(formattedDate);
  }
}

function toBoolean(value) {
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      break;
  }
}

function getRomById(query, req, res, callback) {
  return Rom.getRomById(query, (err, fetchedRom) => {
    if (err) {
      if (err.name === 'CastError') {
        return res.status(404).json({ success: false, ...err });
      }
      return res.status(500).json({ success: false, ...err });
    } else if (!fetchedRom) {
      return res
        .status(404)
        .json({ success: false, message: 'Error 404: ROM not found.' });
    } else {
      if (req.user['_id'].toString() === fetchedRom.user_id.toString()) {
        return callback(fetchedRom);
      } else {
        return res
          .status(403)
          .json({ success: false, message: `You cannot get this user's ROM.` });
      }
    }
  });
}

function getAllRoms(query, req, res, callback, limit) {
  if (!limit) {
    limit = 0;
  }
  return Rom.getAllRoms(
    query,
    (err, roms) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!roms) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      if (roms.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: 'No ROMs exist.' });
      }
      return callback(roms);
    },
    limit
  );
}

module.exports.getRoms = async (req, res, next) => {
  try {
    const getAllCore = req.query['core'];
    const getAllHacks = req.query['hacks'];
    let query;
    if (toBoolean(getAllCore) && !toBoolean(getAllHacks)) {
      query = { user_id: req.user['_id'], rom_type: 'core' };
    } else if (toBoolean(getAllHacks) && !toBoolean(getAllCore)) {
      query = { user_id: req.user['_id'], rom_type: 'hack' };
    } else {
      query = { user_id: req.user['_id'] };
    }
    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }
    await Rom.getAllRoms(
      query,
      (err, roms) => {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        if (!roms) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
        let perPage = parseInt(req.query['per_page']);
        if (!perPage) {
          perPage = 14;
        }
        const pageCount = Math.ceil(roms.length / perPage);
        let page = parseInt(req.query['page']);
        if (!page || (!page && !perPage)) {
          return res.status(200).json(roms);
        }
        if (page > pageCount) {
          page = pageCount;
        }
        const paginationFormulaResult = roms.slice(
          page * perPage - perPage,
          page * perPage
        );
        return res.status(200).json(paginationFormulaResult);
      },
      limit
    );
  } catch (err) {
    next(err);
  }
};

module.exports.getRom = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    await Rom.getRomById({ _id: id }, (err, rom) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      } else if (!rom) {
        return res
          .status(404)
          .json({ success: false, message: 'Error 404: ROM not found.' });
      } else {
        if (req.user['_id'].toString() === rom.user_id.toString()) {
          return res.status(200).json(rom);
        } else {
          return res.status(403).json({
            success: false,
            message: `You cannot get this user's ROM.`
          });
        }
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.addRom = async (req, res, next) => {
  try {
    req.body.date_released = convertToDateFormat(req.body.date_released);
    if (req.body.rom_type) {
      req.body.rom_type = req.body.rom_type.toLowerCase();
    }
    const newRom = new Rom({
      user_id: req.user['_id'],
      order_number: req.body.order_number,
      rom_type: req.sanitize(req.body.rom_type),
      file_name: req.sanitize(req.body.file_name),
      file_size: req.body.file_size,
      file_type: req.sanitize(req.body.file_type),
      download_link: req.sanitize(req.body.download_link),
      generation: req.body.generation,
      box_art_url: req.sanitize(req.body.box_art_url),
      game_name: req.sanitize(req.body.game_name),
      region: req.sanitize(req.body.region),
      platform: req.sanitize(req.body.platform),
      description: req.sanitize(req.body.description),
      genre: req.sanitize(req.body.genre) || null,
      date_released: req.sanitize(req.body.date_released),
      logo_url: req.sanitize(req.body.logo_url),
      is_favorite: req.body.is_favorite
    });
    const {
      order_number,
      file_name,
      file_size,
      file_type,
      download_link,
      generation,
      box_art_url,
      game_name,
      region,
      platform,
      description,
      genre,
      date_released,
      logo_url,
      is_favorite
    } = newRom;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    await Rom.addRom(newRom, (err, rom) => {
      if (err) {
        if (err.name === 'ValidationError') {
          return res.status(406).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      if (!rom) {
        return res
          .status(502)
          .json({ success: false, message: 'Bad gateway.' });
      }
      res.append(
        'Created-At-Route',
        `${url.format({
          protocol: req.protocol,
          host: req.get('host'),
          pathname: req.originalUrl
        })}/${rom._id}`
      );
      res.append(
        'Created-At',
        moment()
          .subtract(7, 'hours')
          .format()
      );
      clearCache(req);
      return res.status(201).json(rom);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateRom = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    req.body.date_released = convertToDateFormat(req.body.date_released);
    if (req.body.rom_type) {
      req.body.rom_type = req.body.rom_type.toLowerCase();
    }
    const updateRomData = {
      user_id: req.user['_id'],
      order_number: req.body.order_number,
      rom_type: req.sanitize(req.body.rom_type),
      file_name: req.sanitize(req.body.file_name),
      file_size: req.body.file_size,
      file_type: req.sanitize(req.body.file_type),
      download_link: req.sanitize(req.body.download_link),
      generation: req.body.generation,
      box_art_url: req.sanitize(req.body.box_art_url),
      game_name: req.sanitize(req.body.game_name),
      region: req.sanitize(req.body.region),
      platform: req.sanitize(req.body.platform),
      description: req.sanitize(req.body.description),
      genre: req.sanitize(req.body.genre) || null,
      date_released: req.sanitize(req.body.date_released),
      logo_url: req.sanitize(req.body.logo_url),
      is_favorite: req.body.is_favorite
    };
    const {
      order_number,
      file_name,
      file_size,
      file_type,
      download_link,
      generation,
      box_art_url,
      game_name,
      region,
      platform,
      description,
      genre,
      date_released,
      logo_url,
      is_favorite
    } = updateRomData;
    console.log(updateRomData);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    await getRomById({ _id: id }, req, res, fetchedRom => {
      const isOwnUser =
        fetchedRom.user_id.toString() === req.user['_id'].toString();
      if (isOwnUser) {
        Rom.updateRom({ _id: id }, updateRomData, {}, (err, rom) => {
          if (err) {
            switch (err.name) {
              case 'CastError':
                return res.status(404).json({ success: false, ...err });
              case 'ValidationError':
                return res.status(406).json({ success: false, ...err });
              default:
                return res.status(500).json({ success: false, ...err });
            }
          }
          if (!rom) {
            return res.status(404).json({
              success: false,
              message: 'Error 404: ROM not found.'
            });
          }
          rom = { _id: rom._id, ...updateRomData };
          clearCache(req);

          return res.status(200).json(rom);
        });
      } else {
        return res.status(401).json({
          success: false,
          message: `You can update this user's ROM.`
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.patchRom = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    const query = req.body;
    if (req.body.date_released) {
      req.body.date_released = convertToDateFormat(req.body.date_released);
    }
    let isValid = true;
    const fields = [
      'file_size',
      'file_type',
      'file_name',
      'date_released',
      'description',
      'genre',
      'platform',
      'region',
      'generation',
      'game_name',
      'order_number',
      'rom_type',
      'is_favorite',
      'download_link',
      'logo_url',
      'box_art_url'
    ];
    for (let field of Object.keys(req.body)) {
      if (!fields.includes(field)) {
        isValid = false;
        break;
      } else {
        isValid = true;
        if (typeof field === 'string') {
          field = req.sanitize(field);
        }
      }
    }
    if (!isValid) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    // if (new ValidatePatchRequest(req).validateRomPatch(res)) {
    //   return;
    // }
    await getRomById({ _id: id }, req, res, fetchedRom => {
      const isOwnUser =
        fetchedRom.user_id.toString() === req.user['_id'].toString();
      if (isOwnUser) {
        Rom.patchRom({ _id: id }, { $set: query }, (err, status) => {
          if (err) {
            switch (err.name) {
              case 'CastError':
                return res.status(404).json({ success: false, ...err });
              case 'ValidationError':
                return res.status(406).json({ success: false, ...err });
              default:
                return res.status(500).json({ success: false, ...err });
            }
          }
          if (!status) {
            return res.status(502).json({
              success: false,
              message: 'Bad gateway.'
            });
          }
          getRomById({ _id: id }, req, res, rom => {
            clearCache(req);

            return res.status(200).json(rom);
          });
        });
      } else {
        return res.status(403).json({
          success: false,
          message: `You cannot patch this user's ROM.`
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteRom = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    await getRomById({ _id: id }, req, res, rom => {
      const isOwnUser = rom.user_id.toString() === req.user['_id'].toString();
      if (isOwnUser) {
        Rom.deleteRom({ _id: id }, (err, status) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({ success: false, ...err });
            }
            return res.status(500).json({ success: false, ...err });
          }
          if (!status) {
            return res.status(502).json({
              success: false,
              message: 'Bad gateway.'
            });
          }
          clearCache(req);

          return res.status(200).json({
            success: true,
            message: 'ROM successfully deleted!',
            ...status
          });
        });
      } else {
        return res.status(403).json({
          success: false,
          message: `You cannot delete this user's ROM.`
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteRoms = async (req, res, next) => {
  try {
    const deleteCore = req.query['core'];
    const deleteHacks = req.query['hacks'];
    await getAllRoms(
      { user_id: req.user['_id'] },
      req,
      res,
      roms => {
        const isOwnUser =
          roms[0].user_id.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          let query = {};
          let message = '';
          if (toBoolean(deleteCore) && !toBoolean(deleteHacks)) {
            query = { user_id: req.user['_id'], rom_type: 'core' };
            message = 'All core ROMs have been deleted.';
          } else if (toBoolean(deleteHacks) && !toBoolean(deleteCore)) {
            query = { user_id: req.user['_id'], rom_type: 'hack' };
            message = 'All ROM hacks have been deleted.';
          } else {
            query = { user_id: req.user['_id'] };
            message = 'All ROMs successfully deleted!';
          }
          Rom.deleteAllRoms(query, (err, status) => {
            if (err) {
              return res.status(500).json({ success: false, ...err });
            }
            if (!status) {
              return res.status(502).json({
                success: false,
                message: 'Bad gateway.'
              });
            }
            clearCache(req);

            return res.status(200).json({
              success: true,
              message,
              ...status
            });
          });
        } else {
          return res.status(403).json({
            success: false,
            message: 'You cannot delete ROMs for this user.'
          });
        }
      },
      1
    );
  } catch (err) {
    next(err);
  }
};

module.exports.romsHeaders = async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
};

module.exports.romHeaders = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    await getRomById({ _id: id }, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.romsOptions = async (req, res, next) => {
  try {
    await res.status(204);
  } catch (err) {
    next(err);
  }
};

module.exports.coreRoms = async (req, res, next) => {
  try {
    await Rom.postCore(romsData[0], req.user, (err, roms) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!roms) {
        return res
          .status(502)
          .json({ success: false, message: 'Bad gateway.' });
      }
      getAllRoms(
        { user_id: req.user['_id'] },
        req,
        res,
        fetchedRoms => {
          clearCache(req);
          return res.status(201).json(fetchedRoms);
        },
        0
      );
    });
  } catch (err) {
    next(err);
  }
};

module.exports.romHacks = async (req, res, next) => {
  try {
    await Rom.postHacks(romsData[1], req.user, (err, roms) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!roms) {
        return res
          .status(502)
          .json({ success: false, message: 'Bad gateway.' });
      }
      getAllRoms(
        { user_id: req.user['_id'] },
        req,
        res,
        fetchedRoms => {
          clearCache(req);
          return res.status(201).json(fetchedRoms);
        },
        0
      );
    });
  } catch (err) {
    next(err);
  }
};

module.exports.all = async (req, res, next) => {
  try {
    const methods = [
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE',
      'HEAD',
      'OPTIONS'
    ];
    if (methods.includes(req.method)) {
      res.set('Allow', methods.join(', '));
      return await res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    } else {
      return await res
        .status(501)
        .json({ success: false, message: 'Method not implemented.' });
    }
  } catch (err) {
    next(err);
  }
};