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
      .isInt({ min: 64, max: 16000000 })
      .withMessage(
        'File size must be a number (in kilobytes) between 64 and 16000000.'
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
      .isInt({ min: 64, max: 16000000 })
      .withMessage(
        'File size must be a number (in kilobytes) between 64 and 16000000.'
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
      .isInt({ min: 0, max: 33 })
      .withMessage('Order number must be an integer between 0 and 33.'),
    check('rom_type')
      .optional()
      .matches(/^(core|hack)$/i)
      .withMessage('ROM type must either be a core or a hack.')
      .isLength({ min: 4, max: 5 })
      .withMessage('ROM type must be either 4 or 5 characters.'),
    check('file_name')
      .optional()
      .isString()
      .withMessage('File name must be a string.')
      .isLength({ min: 3, max: 80 })
      .withMessage('File name must be between 3 and 80 characters.'),
    check('file_size')
      .optional()
      .isInt({ min: 64, max: 16000000 })
      .withMessage(
        'File size must be a number (in kilobytes) between 64 and 16000000.'
      ),
    check('file_type')
      .optional()
      .isAlphanumeric()
      .withMessage('File type must only contain letters with optional numbers.')
      .isLength({ min: 2, max: 3 })
      .withMessage('File type must be between 2 and 3 characters.')
      .matches(/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i)
      .withMessage('Invalid file extension.'),
    check('download_link')
      .optional()
      .isURL()
      .withMessage('Download link must be a valid URL.'),
    check('generation')
      .optional()
      .isInt({ min: 1, max: 8 })
      .withMessage('Generation must be a number between 1 and 8.'),
    check('box_art_url')
      .optional()
      .isURL()
      .withMessage('Box art URL must be a valid URL.'),
    check('game_name')
      .optional()
      .isString()
      .withMessage('Game name must be a string.')
      .isLength({ min: 2, max: 56 })
      .withMessage('Game name must be between 2 and 56 characters.'),
    check('region')
      .optional()
      .isString()
      .withMessage('Region must be a string.')
      .isAlpha()
      .withMessage('Region must only contain letters.')
      .isLength({ min: 3, max: 10 })
      .withMessage('Region must be between 3 and 10 characters.'),
    check('platform')
      .optional()
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
      .optional()
      .isURL()
      .withMessage('Logo URL must be a valid URL.'),
    check('date_released')
      .optional()
      .matches(dateRegex)
      .withMessage('Date released must be in the format MM/DD/YYYY.'),
    check('description')
      .optional()
      .isString()
      .withMessage('Description must be a string.')
      .isLength({ min: 5, max: 8000 })
      .withMessage('Description must be between 5 and 8000 characters.'),
    check('is_favorite')
      .optional()
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
