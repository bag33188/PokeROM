const express = require('express');
const moment = require('moment');
const config = require('config');
const url = require('url');
const jwt = require('jsonwebtoken');
const { body } = require('express-validator/check');
const { check, validationResult } = require('express-validator/check');
const secret = config.get('secret');
const User = require('../../models/User');
const Rom = require('../../models/Rom');
const auth = require('../../middleware/auth');
const romsData = require('../../database/data.json')[0];
const router = express.Router();

const fieldsToSanitize = ['name', 'email', 'username', 'password'];

/**
 * @summary Get all Users.
 * @description Gets all users in the database.
 */
router.get('/', auth, async (req, res, next) => {
  try {
    await User.getAllUsers((err, users) => {
      if (err) {
        return res.stauts(500).json({ success: false, ...err });
      }
      return res.status(200).json(users);
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get single User.
 * @description Gets a single user from the database.
 * @param {string} id The ID of the User to get.
 */
router.get('/:id', auth, async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.getUserById({ _id: id }, (err, user) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      return res.status(200).json(user);
    });
  } catch (e) {
    next(err);
  }
});

/**
 * @summary Register user.
 * @description Adds a user to the database to be registered.
 * @param {User} newUser The user data to add.
 */
router.post(
  '/register',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .isLength({ max: 100 })
      .withMessage('Name can only be 100 characters at max.'),
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email is required.')
      .isEmail()
      .withMessage('A valid email is required.'),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
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
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(
        /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi
      )
      .withMessage('Password conatins invalid characters.')
  ],
  async (req, res, next) => {
    try {
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
      const { name, email, username, password } = newUser;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await User.addUser(
        newUser,
        (err, user) => {
          if (err) {
            if (err.name === 'ValidationError') {
              return res.status(400).json({ success: false, ...err });
            }
            return res.status(500).json({ success: false, ...err });
          }
          Rom.postCore(romsData, user, () => {
            console.log(`Core ROMs added for user '${user.username}'.`);
          });
          res.append(
            'Created-At-Route',
            `${url
              .format({
                protocol: req.protocol,
                host: req.get('host'),
                pathname: req.originalUrl
              })
              .replace('/register', '')}/${user._id}`
          );
          res.append('Created-At', moment().format());
          return res
            .status(201)
            .json({ success: true, message: 'User successfully registered!' });
        },
        [
          () => {
            // err callback function
            return res.status(500).json({
              success: false,
              message: 'User with email already registered.'
            });
          },
          () => {
            return res.status(500).json({
              success: false,
              message: 'User with username already exists.'
            });
          }
        ]
      );
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Authenticate User.
 * @description Authenticates a user from its username and password.
 * @param {object} userLogin The login data to authenticate.
 */
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
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(
        /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi
      )
      .withMessage('Password conatins invalid characters.')
  ],
  async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let isValid = true;
      Object.keys(req.body).forEach(field => {
        if (field !== 'username' && field !== 'password') {
          isValid = false;
        }
      });
      if (!isValid) {
        return res.status(400).json({ success: false, msg: 'Bad JSON body.' });
      }
      await User.getUserByUsername(username, (err, user) => {
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
        if (!user)
          return res.status(404).json({
            success: false,
            message: 'Error: User not found.'
          });
        // check entered if password matches username's password
        User.comparePassword(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(403).json({ success: false, ...err });
          }
          if (isMatch) {
            const token = jwt.sign({ data: user }, secret, {
              expiresIn: 604800 // 1 week (in seconds); formula: [60s*60m*24h*7d]
            });
            return res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email
              }
            });
          }
          return res
            .status(403)
            .json({ success: false, message: 'Error: wrong password.' });
        });
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Update User
 * @description Updates a user in the database.
 * @param {string} id The id of the user to update.
 * @param {User} userData The user data to update with.
 */
router.put(
  '/:id',
  auth,
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .isLength({ max: 100 })
      .withMessage('Name can only be 100 characters at max.'),
    check('email')
      .not()
      .isEmpty()
      .withMessage('Email is required.')
      .isEmail()
      .withMessage('A valid email is required.'),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
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
      .isLength({ min: 8, max: 256 })
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(
        /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi
      )
      .withMessage('Password conatins invalid characters.')
  ],
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const userData = req.body;
      let name = req.body.name;
      if (!name) {
        name = null;
      }
      const { email, username, password } = userData;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      await User.updateUser({ _id: id }, userData, {}, err => {
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
        User.getUserById({ _id: id }, (err, user) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({ success: false, ...err });
            }
            return res.status(500).json({ success: false, ...err });
          }
          return res.status(200).json({
            success: true,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              username: user.username
            }
          });
        });
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Patch User
 * @description Partially updates a user.
 * @param {string} id The id of the user to update.
 * @param {object} userData The user data to update with.
 */
router.patch(
  '/:id',
  [
    body(fieldsToSanitize)
      .trim()
      .escape()
  ],
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const query = req.body;
      const pwRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;
      let isValid = true;
      for (let field of Object.keys(req.body)) {
        if (
          field !== 'name' &&
          field !== 'email' &&
          field !== 'username' &&
          field !== 'password'
        ) {
          isValid = false;
          break;
        } else if (field === 'password' && pwRegex.test(field)) {
          isValid = false;
        } else {
          isValid = true;
        }
      }
      if (!isValid) {
        return res
          .status(400)
          .json({ success: false, message: 'Invalid JSON body.' });
      }
      await User.patchUser({ _id: id }, { $set: query }, (err, status) => {
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
        User.getUserById({ _id: id }, (err, user) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({ success: false, ...err });
            } else {
              return res.status(500).json({ success: false, ...err });
            }
          }
          console.log(user.password);
          return res.status(200).json({
            success: true,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              username: user.username
            }
          });
        });
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Delete All Users.
 * @description Deletes all users in the database.
 */
router.delete('/', auth, async (req, res, next) => {
  try {
    await User.deleteAllUsers((err, status) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      Rom.deleteAllRoms({}, err => {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        return res.status(200).json({
          success: true,
          message: 'All users successfully deleted!',
          ...status
        });
      });
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Delete Single User.
 * @description Deletes a single user from the database.
 * @param {string} id The ID of the User to remove.
 */
router.delete('/:id', auth, async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteUser({ _id: id }, (err, status) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      Rom.deleteAllRoms({ userId: id }, err => {
        if (err) {
          if (err.name === 'CastError') {
            return res.status(404).json({ success: false, ...err });
          }
          return res.status(500).json({ success: false, ...err });
        }
        return res.status(200).json({
          success: true,
          message: 'User successfully deleted!',
          ...status
        });
      });
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Head Info.
 * @description Get's header info for entire /api/users route.
 */
router.head('/', async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Single Head Info.
 * @description Get's specific head info for /api/users/:id route.
 */
router.head('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

// use this to make router avaialbe to middleware
module.exports = router;
