const express = require('express');
const { body, param, query, check } = require('express-validator');
const auth = require('../../middleware/auth');
const { cache } = require('../../middleware/cache');
const RomController = require('../../controllers/rom-controller');
const romValidator = require('../../validation/rom-validator');
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
    query(['limit', 'per_page', 'page', 'getAllCore', 'getAllHacks'])
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
    param('id')
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
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('order_number')
      .not()
      .isEmpty()
      .withMessage('Order number is required.')
      .isInt({
        min: romValidator.order_number[0],
        max: romValidator.order_number[1]
      })
      .withMessage(
        `Order number must be an integer between ${
          romValidator.order_number[0]
        } and ${romValidator.order_number[1]}.`
      ),
    check('rom_type')
      .not()
      .isEmpty()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({
        min: romValidator.rom_type[0],
        max: romValidator.rom_type[1]
      })
      .withMessage(
        `ROM type must be either ${romValidator.rom_type[0]} or ${
          romValidator.rom_type[1]
        } characters.`
      ),
    check('file_name')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({
        min: romValidator.file_name[0],
        max: romValidator.file_name[1]
      })
      .withMessage(
        `File name must be between ${romValidator.file_name[0]} and ${
          romValidator.file_name[1]
        } characters.`
      ),
    check('file_size')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({
        min: romValidator.file_size[0],
        max: romValidator.file_size[1]
      })
      .withMessage(
        `File size must be a number (in kilobytes) between ${
          romValidator.file_size[0]
        } and ${romValidator.file_size[1]}.`
      ),
    check('file_type')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({
        min: romValidator.file_type[0],
        max: romValidator.file_type[1]
      })
      .withMessage(
        `File type must be between ${romValidator.file_type[0]} and ${
          romValidator.file_type[1]
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
        min: romValidator.generation[0],
        max: romValidator.generation[1]
      })
      .withMessage(
        `Generation must be a number between ${
          romValidator.generation[0]
        } and ${romValidator.generation[1]}.`
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
        min: romValidator.game_name[0],
        max: romValidator.game_name[1]
      })
      .withMessage(
        `Game name must be between ${romValidator.game_name[0]} and ${
          romValidator.game_name[1]
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
      .isLength({ min: romValidator.region[0], max: romValidator.region[1] })
      .withMessage(
        `Region must be between ${romValidator.region[0]} and ${
          romValidator.region[1]
        } characters.`
      ),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({
        min: romValidator.platform[0],
        max: romValidator.platform[1]
      })
      .withMessage(
        `Platform must be between ${romValidator.platform[0]} and ${
          romValidator.platform[1]
        } characters.`
      ),
    check('genre')
      .optional({ nullable: true, checkFalsy: true })
      .isLength({ min: romValidator.genre[0], max: romValidator.genre[1] })
      .withMessage(
        `Genre must be between ${romValidator.genre[0]} and ${
          romValidator.genre[1]
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
        min: romValidator.description[0],
        max: romValidator.description[1]
      })
      .withMessage(
        `Description must be between ${romValidator.description[0]} and ${
          romValidator.description[1]
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
    body(fieldsToSanitize)
      .trim()
      .escape(),
    param('id')
      .trim()
      .escape(),
    check('order_number')
      .not()
      .isEmpty()
      .withMessage('Order number is required.')
      .isInt({
        min: romValidator.order_number[0],
        max: romValidator.order_number[1]
      })
      .withMessage(
        `Order number must be an integer between ${
          romValidator.order_number[0]
        } and ${romValidator.order_number[1]}.`
      ),
    check('rom_type')
      .not()
      .isEmpty()
      .withMessage('ROM type is required.')
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({
        min: romValidator.rom_type[0],
        max: romValidator.rom_type[1]
      })
      .withMessage(
        `ROM type must be either ${romValidator.rom_type[0]} or ${
          romValidator.rom_type[1]
        } characters.`
      ),
    check('file_name')
      .not()
      .isEmpty()
      .withMessage('File name is required.')
      .isString()
      .withMessage('File name must be a string.')
      .isLength({
        min: romValidator.file_name[0],
        max: romValidator.file_name[1]
      })
      .withMessage(
        `File name must be between ${romValidator.file_name[0]} and ${
          romValidator.file_name[1]
        } characters.`
      ),
    check('file_size')
      .not()
      .isEmpty()
      .withMessage('File size is required.')
      .isInt({
        min: romValidator.file_size[0],
        max: romValidator.file_size[1]
      })
      .withMessage(
        `File size must be a number (in kilobytes) between ${
          romValidator.file_size[0]
        } and ${romValidator.file_size[1]}.`
      ),
    check('file_type')
      .not()
      .isEmpty()
      .withMessage('File type is required.')
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({
        min: romValidator.file_type[0],
        max: romValidator.file_type[1]
      })
      .withMessage(
        `File type must be between ${romValidator.file_type[0]} and ${
          romValidator.file_type[1]
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
        min: romValidator.generation[0],
        max: romValidator.generation[1]
      })
      .withMessage(
        `Generation must be a number between ${
          romValidator.generation[0]
        } and ${romValidator.generation[1]}.`
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
        min: romValidator.game_name[0],
        max: romValidator.game_name[1]
      })
      .withMessage(
        `Game name must be between ${romValidator.game_name[0]} and ${
          romValidator.game_name[1]
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
      .isLength({ min: romValidator.region[0], max: romValidator.region[1] })
      .withMessage(
        `Region must be between ${romValidator.region[0]} and ${
          romValidator.region[1]
        } characters.`
      ),
    check('platform')
      .not()
      .isEmpty()
      .withMessage('Platform is required.')
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({
        min: romValidator.platform[0],
        max: romValidator.platform[1]
      })
      .withMessage(
        `Platform must be between ${romValidator.platform[0]} and ${
          romValidator.platform[1]
        } characters.`
      ),
    check('genre')
      .optional({ nullable: true, checkFalsy: true })
      .isLength({ min: romValidator.genre[0], max: romValidator.genre[1] })
      .withMessage(
        `Genre must be between ${romValidator.genre[0]} and ${
          romValidator.genre[1]
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
        min: romValidator.description[0],
        max: romValidator.description[1]
      })
      .withMessage(
        `Description must be between ${romValidator.description[0]} and ${
          romValidator.description[1]
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
    // body(fieldsToSanitize)
    //   .trim()
    //   .escape(),
    param('id')
      .trim()
      .escape(),
    check('order_number')
      .optional({ nullable: false })
      .isInt({
        min: romValidator.order_number[0],
        max: romValidator.order_number[1]
      })
      .withMessage(
        `Order number must be an integer between ${
          romValidator.order_number[0]
        } and ${romValidator.order_number[1]}.`
      ),
    check('rom_type')
      .optional({ nullable: false })
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({
        min: romValidator.rom_type[0],
        max: romValidator.rom_type[1]
      })
      .withMessage(
        `ROM type must be either ${romValidator.rom_type[0]} or ${
          romValidator.rom_type[1]
        } characters.`
      ),
    check('file_name')
      .optional({ nullable: false })
      .isString()
      .withMessage('File name must be a string.')
      .isLength({
        min: romValidator.file_name[0],
        max: romValidator.file_name[1]
      })
      .withMessage(
        `File name must be between ${romValidator.file_name[0]} and ${
          romValidator.file_name[1]
        } characters.`
      ),
    check('file_size')
      .optional({ nullable: false })
      .isInt({
        min: romValidator.file_size[0],
        max: romValidator.file_size[1]
      })
      .withMessage(
        `File size must be a number (in kilobytes) between ${
          romValidator.file_size[0]
        } and ${romValidator.file_size[1]}.`
      ),
    check('file_type')
      .optional({ nullable: false })
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({
        min: romValidator.file_type[0],
        max: romValidator.file_type[1]
      })
      .withMessage(
        `File type must be between ${romValidator.file_type[0]} and ${
          romValidator.file_type[1]
        } characters.`
      )
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('download_link')
      .optional({ nullable: false })
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .optional({ nullable: false })
      .isInt({
        min: romValidator.generation[0],
        max: romValidator.generation[1]
      })
      .withMessage(
        `Generation must be a number between ${
          romValidator.generation[0]
        } and ${romValidator.generation[1]}.`
      ),
    check('box_art_url')
      .optional({ nullable: false })
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('game_name')
      .optional({ nullable: false })
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({
        min: romValidator.game_name[0],
        max: romValidator.game_name[1]
      })
      .withMessage(
        `Game name must be between ${romValidator.game_name[0]} and ${
          romValidator.game_name[1]
        } characters.`
      ),
    check('region')
      .optional({ nullable: false })
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: romValidator.region[0], max: romValidator.region[1] })
      .withMessage(
        `Region must be between ${romValidator.region[0]} and ${
          romValidator.region[1]
        } characters.`
      ),
    check('platform')
      .optional({ nullable: false })
      .isString()
      .withMessage('Platform must be a string.')
      .isLength({
        min: romValidator.platform[0],
        max: romValidator.platform[1]
      })
      .withMessage(
        `Platform must be between ${romValidator.platform[0]} and ${
          romValidator.platform[1]
        } characters.`
      ),
    check('genre')
      .optional({ nullable: true, checkFalsy: true })
      .isLength({ min: romValidator.genre[0], max: romValidator.genre[1] })
      .withMessage(
        `Genre must be between ${romValidator.genre[0]} and ${
          romValidator.genre[1]
        } characters.`
      )
      .isString()
      .withMessage('Genre must be a string.'),
    check('logo_url')
      .optional({ nullable: false })
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('date_released')
      .optional({ nullable: false })
      .matches(dateRegex)
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .optional({ nullable: false })
      .isString()
      .withMessage('Description must be a string.')
      .isLength({
        min: romValidator.description[0],
        max: romValidator.description[1]
      })
      .withMessage(
        `Description must be between ${romValidator.description[0]} and ${
          romValidator.description[1]
        } characters.`
      ),
    check('is_favorite')
      .optional({ nullable: false })
      .isBoolean()
      .withMessage('is_favorite must be a boolean (true or false)')
  ],
  auth,
  RomController.patchRom
);

router.delete(
  '/:id',
  [
    param('id')
      .trim()
      .escape()
  ],
  auth,
  RomController.deleteRom
);

router.delete(
  '/',
  [
    query(['deleteCore', 'deleteHacks'])
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
    param('id')
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
