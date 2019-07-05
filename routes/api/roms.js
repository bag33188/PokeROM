const express = require('express');
const url = require('url');
const Rom = require('../../models/rom');
const { sanitizeBody } = require('express-validator/filter');
const { check, validationResult } = require('express-validator/check');
const moment = require('moment');
const auth = require('../../middleware/auth');
const romsData = require('../../database/data.json')[0];

const router = express.Router();

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

/**
 * @summary Convert input date.
 * @description Converts JSON date to date valid for UTC conversion.
 * @param {string} date The date string.
 * @returns {Date} A valid UTC date from the input date string.
 */
function convertToDateFormat(date) {
  // split of entity due to sanitiation
  let dateArr = date.split('&#x2F;');
  const year = dateArr[2];
  dateArr = dateArr.reverse();
  dateArr.shift();
  dateArr = dateArr.reverse();
  dateArr.unshift(year);
  const formattedDate = dateArr.join(',');
  date = new Date(formattedDate);
  return date;
}

/**
 * @summary Get all ROMs.
 * @description Gets all ROMs in the database.
 * @param {number} _limit (Optional) The number of ROMs to limit when getting all ROMs.
 * @param {number} page (Optional) For pagination: the page number to go to.
 * @param {number} per_page (Optional) For pagination: the number of ROMs per page.
 */
router.get('/', auth, async (req, res, next) => {
  try {
    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }
    await Rom.getAllRoms({ userId: req.user['_id'] }, (err, roms) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
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
    }, limit);
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Single ROM.
 * @description Get a single ROM from the database.
 * @param {number} id The ID of the ROM to get.
 */
router.get('/:id', auth, async (req, res, next) => {
  try {
    const id = req.params.id;
    await Rom.getRomById({ _id: id, userId: req.user['_id'] }, (err, rom) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      return res.status(200).json(rom);
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
router.post(
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
      .isLength({ min: 3, max: 80 })
      .withMessage('File name must be between 3 and 80 characters.'),
    check('fileSize')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isDecimal({ min: 64, max: 12000000 })
      .withMessage('File size must be a number between 64 and 12000000.'),
    check('fileType')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({ min: 2, max: 3 })
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:(.?)(gb[ac]?|[n3]ds|xci))$/)
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
      .isInt({ min: 1, max: 8 })
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
      .isLength({ min: 2, max: 56 })
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: 3, max: 10 })
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isLength({ min: 2, max: 50 })
      .withMessage('Platform must be between 2 and 50 characters.'),
    check('genre')
      .isLength({ min: 0, max: 20 })
      .withMessage('Genre must be between 2 and 20 characters.'),
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
      .matches(
        /^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/
      )
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .not()
      .isEmpty()
      .withMessage('Description is required.')
      .isLength({ min: 5, max: 8000 })
      .withMessage('Description must be between 5 and 8000 chararacters.')
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
      const orderNumber = newRom.orderNumber;
      const fileName = newRom.fileName;
      const fileSize = newRom.fileSize;
      const fileType = newRom.fileType;
      const downloadLink = newRom.downloadLink;
      const generation = newRom.generation;
      const boxArtUrl = newRom.boxArtUrl;
      const gameName = newRom.gameName;
      const region = newRom.region;
      const platform = newRom.platform;
      const description = newRom.description;
      const genre = newRom.genre;
      const dateReleased = newRom.dateReleased;
      const logoUrl = newRom.logoUrl;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await Rom.addRom(newRom, (err, rom) => {
        if (err) {
          if (err.name === 'ValidationError') {
            return res.status(400).json({ success: false, ...err });
          }
          return res.status(500).json({ success: false, ...err });
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
router.put(
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
      .isLength({ min: 3, max: 80 })
      .withMessage('File name must be between 3 and 80 characters.'),
    check('fileSize')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isDecimal({ min: 64, max: 12000000 })
      .withMessage('File size must be a number between 64 and 12000000.'),
    check('fileType')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({ min: 2, max: 3 })
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:(.?)(gb[ac]?|[n3]ds|xci))$/)
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
      .isInt({ min: 1, max: 8 })
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
      .isLength({ min: 2, max: 56 })
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: 3, max: 10 })
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isLength({ min: 2, max: 50 })
      .withMessage('Platform must be between 2 and 50 characters.'),
    check('genre')
      .isLength({ min: 0, max: 20 })
      .withMessage('Genre must be between 2 and 20 characters.'),
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
      .matches(
        /^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/
      )
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .not()
      .isEmpty()
      .withMessage('Description is required.')
      .isLength({ min: 5, max: 8000 })
      .withMessage('Description must be between 5 and 8000 chararacters.')
  ],
  auth,
  async (req, res, next) => {
    try {
      const id = req.params.id;
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
      const orderNumber = updateRomData.orderNumber;
      const fileName = updateRomData.fileName;
      const fileSize = updateRomData.fileSize;
      const fileType = updateRomData.fileType;
      const downloadLink = updateRomData.downloadLink;
      const generation = updateRomData.generation;
      const boxArtUrl = updateRomData.boxArtUrl;
      const gameName = updateRomData.gameName;
      const region = updateRomData.region;
      const platform = updateRomData.platform;
      const description = updateRomData.description;
      const genre = updateRomData.genre;
      const dateReleased = updateRomData.dateReleased;
      const logoUrl = updateRomData.logoUrl;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await Rom.updateRom({ _id: id }, updateRomData, {}, (err, rom) => {
        if (err) {
          switch (err.name) {
            case 'CastError':
              return res.status(404).json({ success: false, ...err });
            case 'ValidationError':
              return res.status(400).json({ success: false, ...err });
            default:
              return res.status(500).json({ success: false, ...err });
          }
        }
        Rom.getRomById({ _id: id }, (err, rom) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({ success: false, ...err });
            }
            return res.status(500).json({ success: false, ...err });
          } else {
            return res.status(200).json(rom);
          }
        });
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
router.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const query = req.body;
      let isValid = true;
      for (let field of Object.keys(req.body)) {
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
          .status(400)
          .json({ success: false, message: 'Invalid JSON body.' });
      }
      await Rom.patchRom({ _id: id }, { $set: query }, (err, status) => {
        if (err) {
          switch (err.name) {
            case 'CastError':
              return res.status(404).json({ success: false, ...err });
            case 'ValidationError':
              return res.status(400).json({ success: false, ...err });
            default:
              return res.status(500).json({ success: false, ...err });
          }
        }
        Rom.getRomById({ _id: id }, (err, rom) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({ success: false, ...err });
            }
            return res.status(500).json({ success: false, ...err });
          } else {
            return res.status(200).json(rom);
          }
        });
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
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const id = req.params.id;
    await Rom.deleteRom({ _id: id }, (err, status) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      return res.status(200).json({
        success: true,
        message: 'ROM successfully deleted!',
        ...status
      });
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Delete all ROMs.
 * @description Deletes all ROMs in the database.
 */
router.delete('/', auth, async (req, res, next) => {
  try {
    await Rom.deleteAllRoms((err, status) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      return res.status(200).json({
        success: true,
        message: 'All ROMs successfully deleted!',
        ...status
      });
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Head Info.
 * @description Get's header info for entire /api/roms route.
 */
router.head('/', auth, async (req, res, next) => {
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
router.head('/:id', auth, async (req, res, next) => {
  try {
    const id = req.params.id;
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Options.
 * @description Get supported options for this endpoint.
 */
router.options('/', async (req, res, next) => {
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
router.post('/core', auth, async (req, res, next) => {
  try {
    await Rom.postCore(romsData, req.user, () => {
      Rom.getAllRoms({ userId: req.user['_id'] }, (err, roms) => {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        return res.status(201).json(roms);
      });
    });
  } catch (err) {
    next(err);
  }
});

// export router
module.exports = router;
