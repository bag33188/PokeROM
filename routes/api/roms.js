const express = require('express');
const url = require('url');
const mongoose = require('mongoose');
const moment = require('moment');
const {sanitizeBody} = require('express-validator/filter');
const {check, validationResult} = require('express-validator/check');
const Rom = require('../../models/Rom');
const auth = require('../../middleware/auth');
const romsData = require('../../database/data.json');
const ValidatePatchRequest = require('../../middleware/ValidatePatchRequest');
// const all_routes = require('express-list-endpoints');

const httpRouter = express.Router();

// console.log(all_routes(httpRouter));

// define array with fields to sanitize
const fieldsToSanitize = [
  'fileSize',
  'fileType',
  'fileName',
  'dateReleased',
  'description',
  'genre',
  'platform',
  'region',
  'generation',
  'gameName'
];
const dateRegex = /^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/;

/**
 * @summary Convert input date.
 * @description Converts JSON date to date valid for UTC conversion.
 * @param {string} date The date string.
 * @returns {Date|undefined} A valid UTC date from the input date string or nothing.
 */
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

function getRomById(query, req, res, callback) {
  return Rom.getRomById(query, (err, fetchedRom) => {
    if (err) {
      if (err.name === 'CastError') {
        return res.status(404).json({success: false, ...err});
      }
      return res.status(500).json({success: false, ...err});
    } else if (!fetchedRom) {
      return res
        .status(404)
        .json({success: false, message: 'Error 404: ROM not found.'});
    } else {
      if (req.user['_id'].toString() === fetchedRom.userId.toString()) {
        return callback(fetchedRom);
      } else {
        return res
          .status(403)
          .json({success: false, message: `You cannot get this user's ROM.`});
      }
    }
  });
}

function getAllRoms(query, req, res, callback, limit) {
  return Rom.getAllRoms(
    query,
    (err, roms) => {
      if (err) {
        return res.status(500).json({success: false, ...err});
      }
      if (!roms) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      if (roms.length === 0) {
        return res.status(404).json({success: false, message: 'No ROMs exist.'});
      }
      return callback(roms);
    },
    limit
  );
}

/**
 * @summary Get all ROMs.
 * @description Gets all ROMs in the database.
 * @param {number} _limit (Optional) The number of ROMs to limit when getting all ROMs.
 * @param {number} page (Optional) For pagination: the page number to go to.
 * @param {number} per_page (Optional) For pagination: the number of ROMs per page.
 */
httpRouter.get('/', auth, async (req, res, next) => {
  try {
    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }
    await Rom.getAllRoms(
      {userId: req.user['_id']},
      (err, roms) => {
        if (err) {
          return res.status(500).json({success: false, ...err});
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
        res.status(200).json(paginationFormulaResult);
      },
      limit
    );
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Single ROM.
 * @description Get a single ROM from the database.
 * @param {number} id The ID of the ROM to get.
 */
httpRouter.get('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'ROM not found.'});
    }
    await Rom.getRomById({_id: id}, (err, rom) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({success: false, ...err});
        }
        return res.status(500).json({success: false, ...err});
      } else if (!rom) {
        return res
          .status(404)
          .json({success: false, message: 'Error 404: ROM not found.'});
      } else {
        if (req.user['_id'].toString() === rom.userId.toString()) {
          return res.status(200).json(rom);
        } else {
          return res
            .status(403)
            .json({success: false, message: `You cannot get this user's ROM.`});
        }
      }
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Add ROM.
 * @description Adds a ROM to the database.
 * @param {Rom} newRom The ROM data to add.
 */
httpRouter.post(
  '/',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('orderNumber')
      .not()
      .isEmpty()
      .withMessage('Order number is required.'),
    check('fileName')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({min: 3, max: 80})
      .withMessage('File name must be between 3 and 80 characters.'),
    check('fileSize')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({min: 64, max: 12000000})
      .withMessage('File size must be a number (in kilobytes) between 64 and 12000000.'),
    check('fileType')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({min: 2, max: 3})
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('downloadLink')
      .not()
      .isEmpty()
      .withMessage('Download link is required.')
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .not()
      .isEmpty()
      .withMessage('Generation is required.')
      .isInt({min: 1, max: 8})
      .withMessage('Generation must be a number between 1 and 8.'),
    check('boxArtUrl')
      .not()
      .isEmpty()
      .withMessage('Box art URL is required.')
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('gameName')
      .not()
      .isEmpty()
      .withMessage('Game name is required.')
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({min: 2, max: 56})
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({min: 3, max: 10})
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({min: 2, max: 50})
      .withMessage('Platform must be between 2 and 50 characters.'),
    check('genre')
      .optional()
      .isLength({min: 2, max: 20})
      .withMessage('Genre must be between 2 and 20 characters.')
      .isString()
      .withMessage('Genre must be a string.'),
    check('logoUrl')
      .not()
      .isEmpty()
      .withMessage('A logo URL is required.')
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('dateReleased')
      .not()
      .isEmpty()
      .withMessage('Date released is required.')
      .matches(dateRegex)
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .not()
      .isEmpty()
      .withMessage('Description is required.')
      .isString()
      .withMessage('Description must be a string.')
      .isLength({min: 5, max: 8000})
      .withMessage('Description must be between 5 and 8000 characters.')
  ],
  auth,
  async (req, res, next) => {
    try {
      req.body.dateReleased = convertToDateFormat(req.body.dateReleased);
      const newRom = new Rom({
        userId: req.user['_id'],
        orderNumber: req.body.orderNumber,
        fileName: req.body.fileName,
        fileSize: req.body.fileSize,
        fileType: req.body.fileType,
        downloadLink: req.body.downloadLink,
        generation: req.body.generation,
        boxArtUrl: req.body.boxArtUrl,
        gameName: req.body.gameName,
        region: req.body.region,
        platform: req.body.platform,
        description: req.body.description,
        genre: req.body.genre,
        dateReleased: req.body.dateReleased,
        logoUrl: req.body.logoUrl
      });
      const {
        orderNumber,
        fileName,
        fileSize,
        fileType,
        downloadLink,
        generation,
        boxArtUrl,
        gameName,
        region,
        platform,
        description,
        genre,
        dateReleased,
        logoUrl
      } = newRom;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      await Rom.addRom(newRom, (err, rom) => {
        if (err) {
          if (err.name === 'ValidationError') {
            return res.status(406).json({success: false, ...err});
          }
          return res.status(500).json({success: false, ...err});
        }
        if (!rom) {
          return res.status(502).json({success: false, message: 'Bad gateway.'});
        }
        res.append(
          'Created-At-Route',
          `${url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: req.originalUrl
          })}/${rom._id}`
        );
        res.append('Created-At', moment().format());
        return res.status(201).json(rom);
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Update ROM.
 * @description Updates a ROM in the database.
 * @param {number} id The ID of the ROM to update.
 * @param {Rom} romData The ROM data to update with.
 */
httpRouter.put(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('orderNumber')
      .not()
      .isEmpty()
      .withMessage('Order number is required.'),
    check('fileName')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({min: 3, max: 80})
      .withMessage('File name must be between 3 and 80 characters.'),
    check('fileSize')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({min: 64, max: 12000000})
      .withMessage('File size must be a number (in kilobytes) between 64 and 12000000.'),
    check('fileType')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({min: 2, max: 3})
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('downloadLink')
      .not()
      .isEmpty()
      .withMessage('Download link is required.')
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .not()
      .isEmpty()
      .withMessage('Generation is required.')
      .isInt({min: 1, max: 8})
      .withMessage('Generation must be a number between 1 and 8.'),
    check('boxArtUrl')
      .not()
      .isEmpty()
      .withMessage('Box art URL is required.')
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('gameName')
      .not()
      .isEmpty()
      .withMessage('Game name is required.')
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({min: 2, max: 56})
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({min: 3, max: 10})
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({min: 2, max: 50})
      .withMessage('Platform must be between 2 and 50 characters.'),
    check('genre')
      .optional()
      .isLength({min: 2, max: 20})
      .withMessage('Genre must be between 2 and 20 characters.')
      .isString()
      .withMessage('Genre must be a string.'),
    check('logoUrl')
      .not()
      .isEmpty()
      .withMessage('A logo URL is required.')
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('dateReleased')
      .not()
      .isEmpty()
      .withMessage('Date released is required.')
      .matches(dateRegex)
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .not()
      .isEmpty()
      .withMessage('Description is required.')
      .isString()
      .withMessage('Description must be a string.')
      .isLength({min: 5, max: 8000})
      .withMessage('Description must be between 5 and 8000 characters.')
  ],
  auth,
  async (req, res, next) => {
    try {
      let id;
      try {
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
        return res.status(404).json({success: false, message: 'ROM not found.'});
      }
      req.body.dateReleased = convertToDateFormat(req.body.dateReleased);
      const updateRomData = {
        userId: req.user['_id'],
        orderNumber: req.body.orderNumber,
        fileName: req.body.fileName,
        fileSize: req.body.fileSize,
        fileType: req.body.fileType,
        downloadLink: req.body.downloadLink,
        generation: req.body.generation,
        boxArtUrl: req.body.boxArtUrl,
        gameName: req.body.gameName,
        region: req.body.region,
        platform: req.body.platform,
        description: req.body.description,
        genre: req.body.genre,
        dateReleased: req.body.dateReleased,
        logoUrl: req.body.logoUrl
      };
      const {
        orderNumber,
        fileName,
        fileSize,
        fileType,
        downloadLink,
        generation,
        boxArtUrl,
        gameName,
        region,
        platform,
        description,
        genre,
        dateReleased,
        logoUrl
      } = updateRomData;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      await getRomById({_id: id}, req, res, fetchedRom => {
        const isOwnUser =
          fetchedRom.userId.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          Rom.updateRom({_id: id}, updateRomData, {}, (err, rom) => {
            if (err) {
              switch (err.name) {
                case 'CastError':
                  return res.status(404).json({success: false, ...err});
                case 'ValidationError':
                  return res.status(406).json({success: false, ...err});
                default:
                  return res.status(500).json({success: false, ...err});
              }
            }
            if (!rom) {
              return res.status(404).json({
                success: false,
                message: 'Error 404: ROM not found.'
              });
            }
            rom = {_id: rom._id, ...updateRomData};
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
  }
);

/**
 * @summary Partially Update ROM.
 * @description Partially updates a ROM in the database.
 * @param {number} id The ID of the ROM to partially update.
 * @param {object} query The ROM data to partially update with.
 */
httpRouter.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
    try {
      let id;
      try {
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
        return res.status(404).json({success: false, message: 'ROM not found.'});
      }
      const query = req.body;
      if (req.body.dateReleased) {
        req.body.dateReleased = convertToDateFormat(req.body.dateReleased);
      }
      let isValid = true;
      for (const field of Object.keys(req.body)) {
        if (
          field !== 'orderNumber' &&
          field !== 'fileSize' &&
          field !== 'fileType' &&
          field !== 'fileName' &&
          field !== 'dateReleased' &&
          field !== 'description' &&
          field !== 'genre' &&
          field !== 'gameName' &&
          field !== 'downloadLink' &&
          field !== 'platform' &&
          field !== 'region' &&
          field !== 'generation' &&
          field !== 'boxArtUrl' &&
          field !== 'logoUrl'
        ) {
          isValid = false;
          break;
        } else {
          isValid = true;
        }
      }
      if (!isValid) {
        return res
          .status(406)
          .json({success: false, message: 'Data not valid.'});
      }
      if (new ValidatePatchRequest(req).validateRomPatch(res)) {
        return;
      }
      await getRomById({_id: id}, req, res, fetchedRom => {
        const isOwnUser =
          fetchedRom.userId.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          Rom.patchRom({_id: id}, {$set: query}, (err, status) => {
            if (err) {
              switch (err.name) {
                case 'CastError':
                  return res.status(404).json({success: false, ...err});
                case 'ValidationError':
                  return res.status(406).json({success: false, ...err});
                default:
                  return res.status(500).json({success: false, ...err});
              }
            }
            if (!status) {
              return res.status(502).json({
                success: false,
                message: 'Bad gateway.'
              });
            }
            getRomById({_id: id}, req, res, rom => {
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
  }
);

/**
 * @summary Delete single ROM.
 * @description Deletes a single ROM in the database.
 * @param {string} id The ID of the ROM to delete.
 */
httpRouter.delete('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'ROM not found.'});
    }
    await getRomById({_id: id}, req, res, () => {
      const isOwnUser =
        rom.userId.toString() === req.user['_id'].toString();
      if (isOwnUser) {
        Rom.deleteRom({_id: id}, (err, status) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({success: false, ...err});
            }
            return res.status(500).json({success: false, ...err});
          }
          if (!status) {
            return res.status(502).json({
              success: false,
              message: 'Bad gateway.'
            });
          }
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
});

/**
 * @summary Delete all ROMs.
 * @description Deletes all ROMs in the database.
 */
httpRouter.delete('/', auth, async (req, res, next) => {
  try {
    await getAllRoms(
      {userId: req.user['_id']},
      req,
      res,
      roms => {
        const isOwnUser =
          roms[0].userId.toString() === req.user['_id'].toString();
        if (isOwnUser) {
          Rom.deleteAllRoms({userId: req.user['_id']}, (err, status) => {
            if (err) {
              return res.status(500).json({success: false, ...err});
            }
            if (!status) {
              return res.status(502).json({
                success: false,
                message: 'Bad gateway.'
              });
            }
            return res.status(200).json({
              success: true,
              message: 'All ROMs successfully deleted!',
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
});

/**
 * @summary Get Head Info.
 * @description Get's header info for entire /api/roms route.
 */
httpRouter.head('/', auth, async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Single Head Info.
 * @description Get's specific head info for /api/roms/:id route.
 */
httpRouter.head('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'ROM not found.'});
    }
    await getRomById({_id: id}, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Options.
 * @description Get supported options for this endpoint.
 */
httpRouter.options('/', auth, async (req, res, next) => {
  try {
    await res.status(204);
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Post Core ROMs.
 * @description Adds Core ROMs to the Database.
 */
httpRouter.post('/core', auth, async (req, res, next) => {
  try {
    await Rom.postCore(romsData[0], req.user, (err, roms) => {
      try {
        if (err) {
          return res.status(500).json({success: false, ...err});
        }
        if (!roms) {
          return res.status(502).json({success: false, message: 'Bad gateway.'});
        }
        getAllRoms({userId: req.user['_id']}, req, res, (fetchedRoms) => {
          return res.status(201).json(fetchedRoms);
        }, 0);
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Post ROM Hacks.
 * @description Adds Pokemon ROM Hacks.
 */
httpRouter.post('/hacks', auth, async (req, res, next) => {
  try {
    await Rom.postHacks(romsData[1], req.user, (err, roms) => {
      if (err) {
        return res.status(500).json({success: false, ...err});
      }
      if (!roms) {
        return res.status(502).json({success: false, message: 'Bad gateway.'});
      }
      getAllRoms({userId: req.user['_id']}, req, res, (fetchedRoms) => {
        return res.status(201).json(fetchedRoms);
      }, 0);
    });
  } catch (err) {
    next(err);
  }
});

httpRouter.all('/*', async (req, res, next) => {
  try {
    const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD' ,'OPTIONS'];
    if (methods.includes(req.method)) {
      res.set('Allow', methods.join(', '));
      return await res.status(405).json({success: false, message: 'Method not allowed.'});
    } else {
      return await res.status(501).json({success: false, message: 'Method not implemented.'});
    }
  } catch (err) {
    next(err);
  }
});
// export httpRouter
module.exports = httpRouter;
