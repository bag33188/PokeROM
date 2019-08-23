const express = require('express');
const url = require('url');
const mongoose = require('mongoose');
const moment = require('moment');
const {
  sanitizeBody,
  sanitizeParam,
  sanitizeQuery
} = require('express-validator/filter');
const { check, validationResult } = require('express-validator/check');
const Rom = require('../../models/Rom');
const auth = require('../../middleware/auth');
const romsData = require('../../database/data.json');
const ValidatePatchRequest = require('../../middleware/validate-patch-request');
const [cache, clearCache] = require('../../middleware/cache');
// const all_routes = require('express-list-endpoints');

const httpRouter = express.Router();

const routesWithParams = ['core', 'hacks'];

// console.log(all_routes(httpRouter));

// define array with fields to sanitize
const fieldsToSanitize = [
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
  'is_favorite'
];
const dateRegex = /^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/;

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

httpRouter.get(
  '/',
  cache(20),
  [
    sanitizeQuery(['limit', 'per_page', 'page', 'getAllCore', 'getAllHacks'])
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.get(
  '/:id',
  cache(20),
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.post(
  '/',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('order_number')
      .not()
      .isEmpty()
      .withMessage('Order number is required.')
      .isInt({ min: 0, max: 33 })
      .withMessage('Order number must be an integer between 0 and 33.'),
    check('rom_type')
      .not()
      .isEmpty()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({ min: 4, max: 5 })
      .withMessage('ROM type must be either 4 or 5 characters.'),
    check('file_name')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({ min: 3, max: 80 })
      .withMessage('File name must be between 3 and 80 characters.'),
    check('file_size')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({ min: 64, max: 12000000 })
      .withMessage(
        'File size must be a number (in kilobytes) between 64 and 12000000.'
      ),
    check('file_type')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({ min: 2, max: 3 })
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('download_link')
      .not()
      .isEmpty()
      .withMessage('Download link is required.')
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .not()
      .isEmpty()
      .withMessage('Generation is required.')
      .isInt({ min: 1, max: 8 })
      .withMessage('Generation must be a number between 1 and 8.'),
    check('box_art_url')
      .not()
      .isEmpty()
      .withMessage('Box art URL is required.')
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('game_name')
      .not()
      .isEmpty()
      .withMessage('Game name is required.')
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({ min: 2, max: 56 })
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: 3, max: 10 })
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({ min: 2, max: 50 })
      .withMessage('Platform must be between 2 and 50 characters.'),
    check('genre')
      .optional()
      .isLength({ min: 2, max: 20 })
      .withMessage('Genre must be between 2 and 20 characters.')
      .isString()
      .withMessage('Genre must be a string.'),
    check('logo_url')
      .not()
      .isEmpty()
      .withMessage('A logo URL is required.')
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('date_released')
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
      .isLength({ min: 5, max: 8000 })
      .withMessage('Description must be between 5 and 8000 characters.'),
    check('is_favorite')
      .not()
      .isEmpty()
      .withMessage('is_favorite is required.')
      .isBoolean()
      .withMessage('is_favorite must be a boolean (true or false)')
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.put(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape(),
    check('order_number')
      .not()
      .isEmpty()
      .withMessage('Order number is required.')
      .isInt({ min: 0, max: 33 })
      .withMessage('Order number must be an integer between 0 and 33.'),
    check('rom_type')
      .not()
      .isEmpty()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({ min: 4, max: 5 })
      .withMessage('ROM type must be either 4 or 5 characters.'),
    check('file_name')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({ min: 3, max: 80 })
      .withMessage('File name must be between 3 and 80 characters.'),
    check('file_size')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({ min: 64, max: 12000000 })
      .withMessage(
        'File size must be a number (in kilobytes) between 64 and 12000000.'
      ),
    check('file_type')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({ min: 2, max: 3 })
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('download_link')
      .not()
      .isEmpty()
      .withMessage('Download link is required.')
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .not()
      .isEmpty()
      .withMessage('Generation is required.')
      .isInt({ min: 1, max: 8 })
      .withMessage('Generation must be a number between 1 and 8.'),
    check('box_art_url')
      .not()
      .isEmpty()
      .withMessage('Box art URL is required.')
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('game_name')
      .not()
      .isEmpty()
      .withMessage('Game name is required.')
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({ min: 2, max: 56 })
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: 3, max: 10 })
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({ min: 2, max: 50 })
      .withMessage('Platform must be between 2 and 50 characters.'),
    check('genre')
      .optional()
      .isLength({ min: 2, max: 20 })
      .withMessage('Genre must be between 2 and 20 characters.')
      .isString()
      .withMessage('Genre must be a string.'),
    check('logo_url')
      .not()
      .isEmpty()
      .withMessage('A logo URL is required.')
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('date_released')
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
      .isLength({ min: 5, max: 8000 })
      .withMessage('Description must be between 5 and 8000 characters.'),
    check('is_favorite')
      .not()
      .isEmpty()
      .withMessage('is_favorite is required.')
      .isBoolean()
      .withMessage('is_favorite must be a boolean (true or false)')
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  ValidatePatchRequest.validateRomPatch,
  auth,
  async (req, res, next) => {
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
        ...fieldsToSanitize,
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
  }
);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.delete(
  '/',
  [
    sanitizeQuery(['deleteCore', 'deleteHacks'])
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.head('/', auth, async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
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
  }
);

httpRouter.options('/', auth, async (req, res, next) => {
  try {
    await res.status(204);
  } catch (err) {
    next(err);
  }
});

httpRouter.post('/core', auth, async (req, res, next) => {
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
});

httpRouter.post('/hacks', auth, async (req, res, next) => {
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
});

httpRouter.all('/*', async (req, res, next) => {
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
});

module.exports = httpRouter;
