const express = require('express');
const { body, param, check } = require('express-validator');
const auth = require('../../middleware/auth');
const { cache } = require('../../middleware/cache');
const UserController = require('../../controllers/user-controller');
const userValidator = require('../../validation/user-validator');

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
    param('id')
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
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .optional({ nullable: true })
      .isLength({ min: userValidator.name[0], max: userValidator.name[1] })
      .withMessage(
        `Name must be between ${userValidator.name[0]} and ${
          userValidator.name[1]
        } characters.`
      )
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
      .isLength({
        min: userValidator.username[0],
        max: userValidator.username[1]
      })
      .withMessage(
        `Username must be between ${userValidator.username[0]} and ${
          userValidator.username[1]
        } characters.`
      ),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Password must be a string.')
      .isLength({
        min: userValidator.password[0],
        max: userValidator.password[1]
      })
      .withMessage(
        `Password must be between ${userValidator.password[0]} and ${
          userValidator.password[1]
        } characters.`
      )
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.registerUser
);

router.post(
  '/authenticate',
  [
    body(fieldsToSanitize)
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
      .isLength({
        min: userValidator.username[0],
        max: userValidator.username[1]
      })
      .withMessage(
        `Username must be between ${userValidator.username[0]} and ${
          userValidator.username[1]
        } characters.`
      ),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString()
      .withMessage('Password must be a string.')
      .isLength({
        min: userValidator.password[0],
        max: userValidator.password[1]
      })
      .withMessage(
        `Password must be between ${userValidator.password[0]} and ${
          userValidator.password[1]
        } characters.`
      )
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
    body(fieldsToSanitize)
      .trim()
      .escape(),
    param('id')
      .trim()
      .escape(),
    check('name')
      .optional({ nullable: true })
      .isLength({ min: userValidator.name[0], max: userValidator.name[1] })
      .withMessage(
        `Name must be between ${userValidator.name[0]} and ${
          userValidator.name[1]
        } characters.`
      )
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
      .isLength({
        min: userValidator.username[0],
        max: userValidator.username[1]
      })
      .withMessage(
        `Username must be between ${userValidator.username[0]} and ${
          userValidator.username[1]
        } characters.`
      ),
    check('password')
      .not()
      .isEmpty()
      .isString()
      .withMessage('Password must be a string.')
      .isLength({
        min: userValidator.password[0],
        max: userValidator.password[1]
      })
      .withMessage(
        `Password must be between ${userValidator.password[0]} and ${
          userValidator.password[1]
        } characters.`
      )
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  UserController.updateUser
);

router.patch(
  '/:id',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    param('id')
      .trim()
      .escape(),
    check('name')
      .optional({ nullable: true })
      .isLength({ min: userValidator.name[0], max: userValidator.name[1] })
      .withMessage(
        `Name must be between ${userValidator.name[0]} and ${
          userValidator.name[1]
        } characters.`
      )
      .isString()
      .withMessage('Name must be a string.'),
    check('username')
      .optional({ nullable: false })
      .isString()
      .withMessage('Username must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(criticalMsg)
      .isLength({
        min: userValidator.username[0],
        max: userValidator.username[1]
      })
      .withMessage(
        `Username must be between ${userValidator.username[0]} and ${
          userValidator.username[1]
        } characters.`
      ),
    check('password')
      .optional({ nullable: false })
      .isString()
      .withMessage('Password must be a string.')
      .isLength({
        min: userValidator.password[0],
        max: userValidator.password[1]
      })
      .withMessage(
        `Password must be between ${userValidator.password[0]} and ${
          userValidator.password[1]
        } characters.`
      )
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
    param('id')
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
    param('id')
      .trim()
      .escape()
  ],
  auth,
  UserController.userHeaders
);

router.all('/*', UserController.all);

module.exports = router;
