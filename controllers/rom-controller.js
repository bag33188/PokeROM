const url = require('url');
const mongoose = require('mongoose');
const moment = require('moment');
const { validationResult } = require('express-validator/check');
const Rom = require('../models/Rom');
const [coreRoms, romHacks] = require('../database/data.json');
const [, clearCache] = require('../middleware/cache');

const routesWithParams = ['core', 'hacks'];

function convertToDateFormat(date) {
  if (date) {
    const dateArr = date.replace(/(&#[xX]2[Ff];)/g, '/').split('/');
    const monthIndex = parseInt(dateArr[0], 10) - 1;
    const day = parseInt(dateArr[1], 10);
    const year = parseInt(dateArr[2], 10);
    return new Date(year, monthIndex, day);
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

function getRomById(id, req, res, callback) {
  return Rom.getRomById(id, (err, fetchedRom) => {
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
        let page = parseInt(req.query['page']);
        if (!page || (!page && !perPage)) {
          return res.status(200).json(roms);
        }
        if (page && !perPage) {
          perPage = 4;
        }
        const pageCount = Math.ceil(roms.length / perPage);
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
    let id = null;
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
    await Rom.getRomById(id, (err, rom) => {
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
    let isValid = true;
    const fields = [
      '_id',
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
    let id = null;
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
    let isValid = true;
    const fields = [
      '_id',
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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    await getRomById(id, req, res, async fetchedRom => {
      try {
        const isOwnUser =
          fetchedRom.user_id.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          await Rom.updateRom(id, updateRomData, {}, (err, rom) => {
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
            rom.date_released = new Date(rom.date_released);
            clearCache(req);
            return res.status(200).json(rom);
          });
        } else {
          return await res.status(401).json({
            success: false,
            message: `You can update this user's ROM.`
          });
        }
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.patchRom = async (req, res, next) => {
  try {
    let id = null;
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
    const {
      file_size,
      file_type,
      file_name,
      date_released,
      description,
      genre,
      platform,
      region,
      generation,
      game_name,
      order_number,
      rom_type,
      is_favorite,
      download_link,
      logo_url,
      box_art_url
    } = query;
    let isValid = true;
    const fields = [
      '_id',
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

    await getRomById(id, req, res, async fetchedRom => {
      try {
        const isOwnUser =
          fetchedRom.user_id.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          await Rom.patchRom(id, { $set: query }, async (err, status) => {
            if (err) {
              switch (err.name) {
                case 'CastError':
                  return await res.status(404).json({ success: false, ...err });
                case 'ValidationError':
                  return await res.status(406).json({ success: false, ...err });
                default:
                  return await res.status(500).json({ success: false, ...err });
              }
            }
            if (!status) {
              return await res.status(502).json({
                success: false,
                message: 'Bad gateway.'
              });
            }
            await getRomById(id, req, res, rom => {
              clearCache(req);

              return res.status(200).json(rom);
            });
          });
        } else {
          return await res.status(403).json({
            success: false,
            message: `You cannot patch this user's ROM.`
          });
        }
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteRom = async (req, res, next) => {
  try {
    let id = null;
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
    await getRomById(id, req, res, async rom => {
      try {
        const isOwnUser = rom.user_id.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          await Rom.deleteRom(id, (err, status) => {
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
          return await res.status(403).json({
            success: false,
            message: `You cannot delete this user's ROM.`
          });
        }
      } catch (err) {
        next(err);
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
      async roms => {
        try {
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
            await Rom.deleteAllRoms(query, (err, status) => {
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
            return await res.status(403).json({
              success: false,
              message: 'You cannot delete ROMs for this user.'
            });
          }
        } catch (err) {
          next(err);
        }
      },
      1
    );
  } catch (err) {
    next(err);
  }
};

module.exports.romsHeaders = (req, res) => {
  res.status(200);
};

module.exports.romHeaders = async (req, res, next) => {
  try {
    let id = null;
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
    await getRomById(id, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.romsOptions = (req, res) => {
  res.status(204);
};

module.exports.coreRoms = async (req, res, next) => {
  try {
    await Rom.postCore(coreRoms, req.user, async (err, roms) => {
      try {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        if (!roms) {
          return res
            .status(502)
            .json({ success: false, message: 'Bad gateway.' });
        }
        await getAllRoms(
          { user_id: req.user['_id'] },
          req,
          res,
          fetchedRoms => {
            clearCache(req);
            return res.status(201).json(fetchedRoms);
          },
          0
        );
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.romHacks = async (req, res, next) => {
  try {
    await Rom.postHacks(romHacks, req.user, async (err, roms) => {
      try {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        if (!roms) {
          return res
            .status(502)
            .json({ success: false, message: 'Bad gateway.' });
        }
        await getAllRoms(
          { user_id: req.user['_id'] },
          req,
          res,
          fetchedRoms => {
            clearCache(req);
            return res.status(201).json(fetchedRoms);
          },
          0
        );
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.all = (req, res) => {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
  if (methods.includes(req.method)) {
    res.set('Allow', methods.join(', '));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
