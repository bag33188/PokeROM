const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const [cache] = require('../../middleware/cache');
const UserController = require('../../controllers/user-controller');

const httpRouter = express.Router();

const fieldsToSanitize = ['name', 'username', 'password'];
const pwdRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;

httpRouter.get('/', auth, cache(14), UserController.getUsers);

httpRouter.get(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  cache(14),
  UserController.getUser
);

httpRouter.post(
  '/register',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .optional()
      .isLength({ min: 1, max: 100 })
      .withMessage('Name can only be 100 characters at max.')
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
      .isString()
      .withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({ min: 5, max: 22 })
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.registerUser
);

httpRouter.post(
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
      .withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({ min: 5, max: 22 })
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.authorizeUser
);

httpRouter.put(
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
      .optional()
      .isLength({ min: 1, max: 100 })
      .withMessage('Name can only be 100 characters at max.')
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
      .isString()
      .withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({ min: 5, max: 22 })
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.updateUser
);

httpRouter.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape(),
    check('name')
      .optional()
      .isLength({ min: 1, max: 100 })
      .withMessage('Name can only be 100 characters at max.')
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .optional()
      .isString()
      .withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({ min: 5, max: 22 })
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .optional()
      .isString()
      .withMessage('Name must be a string.')
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  auth,
  UserController.patchUser
);

httpRouter.delete('/', auth, UserController.deleteUsers);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  UserController.deleteUser
);

httpRouter.head('/', auth, UserController.usersHeaders);

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  UserController.userHeaders
);

httpRouter.all('/*', UserController.all);

module.exports = httpRouter;
