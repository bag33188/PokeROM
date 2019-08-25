const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const [cache] = require('../../middleware/cache');
const ValidatePatchRequest = require('../../middleware/validate-patch-request');
const user_controller = require('../../controllers/UserController');

const httpRouter = express.Router();

const fieldsToSanitize = ['name', 'username', 'password'];
const pwdRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;

httpRouter.get('/', auth, cache(14), user_controller.getUsers);

httpRouter.get(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  cache(14),
  user_controller.getUser
);

httpRouter.post(
  '/register',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .optional()
      .isLength({ max: 100 })
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
  user_controller.registerUser
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
  user_controller.authorizeUser
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
  user_controller.updateUser
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
  ValidatePatchRequest.validateUserPatch,
  auth,
  user_controller.patchUser
);

httpRouter.delete('/', auth, user_controller.deleteUsers);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  user_controller.deleteUser
);

httpRouter.head('/', auth, user_controller.usersHeaders);

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  user_controller.userHeaders
);

httpRouter.all('/*', user_controller.all);

module.exports = httpRouter;
