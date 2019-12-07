const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const { cache } = require('../../middleware/cache');
const UserController = require('../../controllers/user-controller');

const router = express.Router();

const fieldsToSanitize = ['name', 'username', 'password'];
const pwdRegex = /((?:(<\/?[\s\S]*?>)|(javascript:(?:[^:\s]?)+))|[\\/"'<>&])/gi;
// the following string is a message that is used exactly untouched on the front end; thus giving purpose to a global variable
const criticalMsg =
  'Username can only contain letters, numbers, or underscores.';

router.get('/', auth, cache(5), UserController.getUsers);

router.get(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  cache(5),
  UserController.getUser
);

router.post(
  '/register',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .optional({ nullable: true })
      .isLength({ min: 1, max: 100 })
      .withMessage('Name can only be 100 characters at max.')
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
      .isString()
      .withMessage('Username must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(criticalMsg)
      .isLength({ min: 3, max: 22 })
      .withMessage('Username must be between 3 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Password must be a string.')
      .isLength({ min: 6, max: 256 })
      .withMessage('Password must be between 6 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.registerUser
);

router.post(
  '/authenticate',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
      .isString()
      .withMessage('Username must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(criticalMsg)
      .isLength({ min: 3, max: 22 })
      .withMessage('Username must be between 3 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Password must be a string.')
      .isLength({ min: 6, max: 256 })
      .withMessage('Password must be between 6 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.authorizeUser
);

router.put(
  '/:id',
  auth,
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape(),
    check('name')
      .optional({ nullable: true })
      .isLength({ min: 1, max: 100 })
      .withMessage('Name can only be 100 characters at max.')
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
      .isString()
      .withMessage('Username must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(criticalMsg)
      .isLength({ min: 3, max: 22 })
      .withMessage('Username must be between 3 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Password must be a string.')
      .isLength({ min: 6, max: 256 })
      .withMessage('Password must be between 6 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.updateUser
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
    check('name')
      .optional({ nullable: true })
      .isLength({ min: 1, max: 100 })
      .withMessage('Name can only be 100 characters at max.')
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .optional()
      .isString()
      .withMessage('Username must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(criticalMsg)
      .isLength({ min: 3, max: 22 })
      .withMessage('Username must be between 3 and 22 characters.'),
    check('password')
      .optional()
      .isString()
      .withMessage('Password must be a string.')
      .isLength({ min: 6, max: 256 })
      .withMessage('Password must be between 6 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  auth,
  UserController.patchUser
);

router.delete('/', auth, UserController.deleteUsers);

router.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  UserController.deleteUser
);

router.head('/', auth, UserController.usersHeaders);

router.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  UserController.userHeaders
);

router.all('/*', UserController.all);

module.exports = router;
