const express = require('express');
const {
  sanitizeBody,
  sanitizeParam,
  sanitizeQuery
} = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const { cache } = require('../../middleware/cache');
const RomController = require('../../controllers/rom-controller');
const romsValidator = require('../../validation/roms-validator');
// const all_routes = require('express-list-endpoints');

const router = express.Router();

// console.log(all_routes(router));

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
const dateRegex = /^(?:(0?[1-9]|1[012])(\/|(&#x2[Ff];))(0?[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/;

router.get(
  '/',
  [
    sanitizeQuery(['limit', 'per_page', 'page', 'getAllCore', 'getAllHacks'])
      .trim()
      .escape()
  ],
  auth,
  cache(10),
  RomController.getRoms
);

router.get(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  cache(10),
  RomController.getRom
);

router.post(
  '/',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('order_number')
      .not()
      .isEmpty()
      .withMessage('Order number is required.')
      .isInt({
        min: romsValidator.order_number[0],
        max: romsValidator.order_number[33]
      })
      .withMessage(
        `Order number must be an integer between ${
          romsValidator.order_number[0]
        } and ${romsValidator.order_number[1]}.`
      ),
    check('rom_type')
      .not()
      .isEmpty()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({
        min: romsValidator.rom_type[0],
        max: romsValidator.rom_type[1]
      })
      .withMessage(
        `ROM type must be either ${romsValidator.rom_type[0]} or ${
          romsValidator.rom_type[1]
        } characters.`
      ),
    check('file_name')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({
        min: romsValidator.file_name[0],
        max: romsValidator.file_name[1]
      })
      .withMessage(
        `File name must be between ${romsValidator.file_name[0]} and ${
          romsValidator.file_name[1]
        } characters.`
      ),
    check('file_size')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({
        min: romsValidator.file_size[0],
        max: romsValidator.file_size[1]
      })
      .withMessage(
        `File size must be a number (in kilobytes) between ${
          romsValidator.file_size[0]
        } and ${romsValidator.file_size[1]}.`
      ),
    check('file_type')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({
        min: romsValidator.file_type[0],
        max: romsValidator.file_type[1]
      })
      .withMessage(
        `File type must be between ${romsValidator.file_type[0]} and ${
          romsValidator.file_type[1]
        } characters.`
      )
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
      .isInt({
        min: romsValidator.generation[0],
        max: romsValidator.generation[1]
      })
      .withMessage(
        `Generation must be a number between ${
          romsValidator.generation[0]
        } and ${romsValidator.generation[1]}.`
      ),
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
      .isLength({
        min: romsValidator.game_name[0],
        max: romsValidator.game_name[1]
      })
      .withMessage(
        `Game name must be between ${romsValidator.game_name[0]} and ${
          romsValidator.game_name[1]
        } characters.`
      ),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: romsValidator.region[0], max: romsValidator.region[1] })
      .withMessage(
        `Region must be between ${romsValidator.region[0]} and ${
          romsValidator.region[1]
        } characters.`
      ),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({
        min: romsValidator.platform[0],
        max: romsValidator.platform[1]
      })
      .withMessage(
        `Platform must be between ${romsValidator.platform[0]} and ${
          romsValidator.platform[1]
        } characters.`
      ),
    check('genre')
      .optional({ nullable: true })
      .isLength({ min: romsValidator.genre[0], max: romsValidator.genre[1] })
      .withMessage(
        `Genre must be between ${romsValidator.genre[0]} and ${
          romsValidator.genre[1]
        } characters.`
      )
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
      .isLength({
        min: romsValidator.description[0],
        max: romsValidator.description[1]
      })
      .withMessage(
        `Description must be between ${romsValidator.description[0]} and ${
          romsValidator.description[1]
        } characters.`
      ),
    check('is_favorite')
      .not()
      .isEmpty()
      .withMessage('is_favorite is required.')
      .isBoolean()
      .withMessage('is_favorite must be a boolean (true or false)')
  ],
  auth,
  RomController.addRom
);

router.put(
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
      .isInt({
        min: romsValidator.order_number[0],
        max: romsValidator.order_number[33]
      })
      .withMessage(
        `Order number must be an integer between ${
          romsValidator.order_number[0]
        } and ${romsValidator.order_number[1]}.`
      ),
    check('rom_type')
      .not()
      .isEmpty()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({
        min: romsValidator.rom_type[0],
        max: romsValidator.rom_type[1]
      })
      .withMessage(
        `ROM type must be either ${romsValidator.rom_type[0]} or ${
          romsValidator.rom_type[1]
        } characters.`
      ),
    check('file_name')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({
        min: romsValidator.file_name[0],
        max: romsValidator.file_name[1]
      })
      .withMessage(
        `File name must be between ${romsValidator.file_name[0]} and ${
          romsValidator.file_name[1]
        } characters.`
      ),
    check('file_size')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({
        min: romsValidator.file_size[0],
        max: romsValidator.file_size[1]
      })
      .withMessage(
        `File size must be a number (in kilobytes) between ${
          romsValidator.file_size[0]
        } and ${romsValidator.file_size[1]}.`
      ),
    check('file_type')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({
        min: romsValidator.file_type[0],
        max: romsValidator.file_type[1]
      })
      .withMessage(
        `File type must be between ${romsValidator.file_type[0]} and ${
          romsValidator.file_type[1]
        } characters.`
      )
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
      .isInt({
        min: romsValidator.generation[0],
        max: romsValidator.generation[1]
      })
      .withMessage(
        `Generation must be a number between ${
          romsValidator.generation[0]
        } and ${romsValidator.generation[1]}.`
      ),
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
      .isLength({
        min: romsValidator.game_name[0],
        max: romsValidator.game_name[1]
      })
      .withMessage(
        `Game name must be between ${romsValidator.game_name[0]} and ${
          romsValidator.game_name[1]
        } characters.`
      ),
    check('region')
      .not()
      .isEmpty()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: romsValidator.region[0], max: romsValidator.region[1] })
      .withMessage(
        `Region must be between ${romsValidator.region[0]} and ${
          romsValidator.region[1]
        } characters.`
      ),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({
        min: romsValidator.platform[0],
        max: romsValidator.platform[1]
      })
      .withMessage(
        `Platform must be between ${romsValidator.platform[0]} and ${
          romsValidator.platform[1]
        } characters.`
      ),
    check('genre')
      .optional({ nullable: true })
      .isLength({ min: romsValidator.genre[0], max: romsValidator.genre[1] })
      .withMessage(
        `Genre must be between ${romsValidator.genre[0]} and ${
          romsValidator.genre[1]
        } characters.`
      )
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
      .isLength({
        min: romsValidator.description[0],
        max: romsValidator.description[1]
      })
      .withMessage(
        `Description must be between ${romsValidator.description[0]} and ${
          romsValidator.description[1]
        } characters.`
      ),
    check('is_favorite')
      .not()
      .isEmpty()
      .withMessage('is_favorite is required.')
      .isBoolean()
      .withMessage('is_favorite must be a boolean (true or false)')
  ],
  auth,
  RomController.updateRom
);

router.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape(),
    check('order_number')
      .optional()
      .withMessage('Order number is required.')
      .isInt({
        min: romsValidator.order_number[0],
        max: romsValidator.order_number[33]
      })
      .withMessage(
        `Order number must be an integer between ${
          romsValidator.order_number[0]
        } and ${romsValidator.order_number[1]}.`
      ),
    check('rom_type')
      .optional()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({
        min: romsValidator.rom_type[0],
        max: romsValidator.rom_type[1]
      })
      .withMessage(
        `ROM type must be either ${romsValidator.rom_type[0]} or ${
          romsValidator.rom_type[1]
        } characters.`
      ),
    check('file_name')
      .optional()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({
        min: romsValidator.file_name[0],
        max: romsValidator.file_name[1]
      })
      .withMessage(
        `File name must be between ${romsValidator.file_name[0]} and ${
          romsValidator.file_name[1]
        } characters.`
      ),
    check('file_size')
      .optional()
      .withMessage('File size is required.')
      .isInt({
        min: romsValidator.file_size[0],
        max: romsValidator.file_size[1]
      })
      .withMessage(
        `File size must be a number (in kilobytes) between ${
          romsValidator.file_size[0]
        } and ${romsValidator.file_size[1]}.`
      ),
    check('file_type')
      .optional()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({
        min: romsValidator.file_type[0],
        max: romsValidator.file_type[1]
      })
      .withMessage(
        `File type must be between ${romsValidator.file_type[0]} and ${
          romsValidator.file_type[1]
        } characters.`
      )
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('download_link')
      .optional()
      .withMessage('Download link is required.')
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .optional()
      .withMessage('Generation is required.')
      .isInt({
        min: romsValidator.generation[0],
        max: romsValidator.generation[1]
      })
      .withMessage(
        `Generation must be a number between ${
          romsValidator.generation[0]
        } and ${romsValidator.generation[1]}.`
      ),
    check('box_art_url')
      .optional()
      .withMessage('Box art URL is required.')
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('game_name')
      .optional()
      .withMessage('Game name is required.')
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({
        min: romsValidator.game_name[0],
        max: romsValidator.game_name[1]
      })
      .withMessage(
        `Game name must be between ${romsValidator.game_name[0]} and ${
          romsValidator.game_name[1]
        } characters.`
      ),
    check('region')
      .optional()
      .withMessage('Region is required.')
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: romsValidator.region[0], max: romsValidator.region[1] })
      .withMessage(
        `Region must be between ${romsValidator.region[0]} and ${
          romsValidator.region[1]
        } characters.`
      ),
    check('platform')
      .optional()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({
        min: romsValidator.platform[0],
        max: romsValidator.platform[1]
      })
      .withMessage(
        `Platform must be between ${romsValidator.platform[0]} and ${
          romsValidator.platform[1]
        } characters.`
      ),
    check('genre')
      .optional({ nullable: true })
      .isLength({ min: romsValidator.genre[0], max: romsValidator.genre[1] })
      .withMessage(
        `Genre must be between ${romsValidator.genre[0]} and ${
          romsValidator.genre[1]
        } characters.`
      )
      .isString()
      .withMessage('Genre must be a string.'),
    check('logo_url')
      .optional()
      .withMessage('A logo URL is required.')
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('date_released')
      .optional()
      .withMessage('Date released is required.')
      .matches(dateRegex)
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .optional()
      .withMessage('Description is required.')
      .isString()
      .withMessage('Description must be a string.')
      .isLength({
        min: romsValidator.description[0],
        max: romsValidator.description[1]
      })
      .withMessage(
        `Description must be between ${romsValidator.description[0]} and ${
          romsValidator.description[1]
        } characters.`
      ),
    check('is_favorite')
      .optional()
      .withMessage('is_favorite is required.')
      .isBoolean()
      .withMessage('is_favorite must be a boolean (true or false)')
  ],
  auth,
  RomController.patchRom
);

router.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  RomController.deleteRom
);

router.delete(
  '/',
  [
    sanitizeQuery(['deleteCore', 'deleteHacks'])
      .trim()
      .escape()
  ],
  auth,
  RomController.deleteRoms
);

router.head('/', auth, RomController.romsHeaders);

router.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  RomController.romHeaders
);

router.options('/', auth, RomController.romsOptions);

router.post('/core', auth, RomController.coreRoms);

router.post('/hacks', auth, RomController.romHacks);

router.all('/*', RomController.all);

module.exports = router;
