const express = require('express');
const moment = require('moment');
const config = require('config');
const url = require('url');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {body} = require('express-validator/check');
const {check, validationResult} = require('express-validator/check');
const secret = config.get('secret');
const User = require('../../models/User');
const Rom = require('../../models/Rom');
const auth = require('../../middleware/auth');
const romsData = require('../../database/data.json');
const ValidatePatchRequest = require('../../middleware/ValidatePatchRequest');

const httpRouter = express.Router();

const fieldsToSanitize = ['name', 'email', 'username', 'password'];
const pwdRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;

function getUserById(query, req, res, callback) {
  return User.getUserById(query, (err, user) => {
    if (err) {

      if (err.name === 'CastError') {
        return res.status(404).json({success: false, ...err});
      }
      return res.status(500).json({success: false, ...err});
    }
    if (!user) {

      return res
        .status(404)
        .json({success: false, message: 'Error 404: user not found.'});
    }
    return callback(user);
  });
}

/**
 * @summary Get all Users.
 * @description Gets all users in the database.
 */
httpRouter.get('/', auth, async (req, res, next) => {
  try {
    await User.getAllUsers((err, users) => {
      if (err) {
        return res.status(500).json({success: false, ...err});
      }
      if (!users) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
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
httpRouter.get('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'User not found.'});
    }
    await User.getUserById({_id: id}, (err, user) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({success: false, ...err});
        }
        return res.status(500).json({success: false, ...err});
      }
      if (!user) {
        return res
          .status(404)
          .json({success: false, message: 'Error 404: user not found.'});
      }
      return res.status(200).json(user);
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Register user.
 * @description Adds a user to the database to be registered.
 * @param {User} newUser The user data to add.
 */
httpRouter.post(
  '/register',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .optional()
      .isLength({max: 100})
      .withMessage('Name can only be 100 characters at max.')
      .isString().withMessage('Name must be a string.'),
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
      .isString().withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({min: 5, max: 22})
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString().withMessage('Name must be a string.')
      .isLength({min: 8, max: 256})
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  async (req, res, next) => {
    try {
      let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
      const {name, email, username, password} = newUser;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      await User.addUser(
        newUser,
        (err, user) => {
          if (err) {
            if (err.name === 'ValidationError') {
              return res.status(406).json({success: false, ...err});
            }
            return res.status(500).json({success: false, ...err});
          }
          if (!user) {
            return res.status(500).json({
              success: false
            });
          }
          Rom.postCore(romsData[0], user, (err, roms) => {
            if (err) {
              return res.status(500).json({ success: false, ...err });
            }
            if (!roms) {
              return res.status(502).json({ success: false, message: 'Bad gateway.' });
            }
            return console.log(`Core ROMs added for user '${user.username}'.`);
          });
          Rom.postHacks(romsData[1], user, (err, roms) => {
            if (err) {
              return res.status(500).json({ success: false, ...err });
            }
            if (!roms) {
              return res.status(502).json({ success: false, message: 'Bad gateway.' });
            }
            return console.log(`ROM Hacks added for user '${user.username}'.`);
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
            .json({success: true, message: 'User successfully registered!'});
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
)
;

/**
 * @summary Authenticate User.
 * @description Authenticates a user from its username and password.
 * @param {object} userLogin The login data to authenticate.
 */
httpRouter.post(
  '/authenticate',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('username')
      .not()
      .isEmpty()
      .withMessage('Username is required.')
      .isString().withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({min: 5, max: 22})
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString().withMessage('Name must be a string.')
      .isLength({min: 8, max: 256})
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  async (req, res, next) => {
    try {
      const {username, password} = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      let isValid = true;
      Object.keys(req.body).forEach(field => {
        if (field !== 'username' && field !== 'password') {
          isValid = false;
        }
      });
      if (!isValid) {
        return res.status(406).json({success: false, message: 'Data not valid.'});
      }
      await User.getUserByUsername(username, (err, user) => {
        if (err) {
          switch (err.name) {
            case 'CastError':
              return res.status(404).json({success: false, ...err});
            case 'ValidationError':
              return res.status(406).json({success: false, ...err});
            default:
              return res.status(500).json({success: false, ...err});
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
            return res.status(403).json({success: false, ...err});
          }
          if (isMatch) {
            const token = jwt.sign({data: user}, secret, {
              expiresIn: 604800 // 1 week (in seconds); formula: [60s*60m*24h*7d]
            });
            return res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username
              }
            });
          }
          return res
            .status(403)
            .json({success: false, message: 'Error: wrong password.'});
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
httpRouter.put(
  '/:id',
  auth,
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .optional()
      .isLength({max: 100})
      .withMessage('Name can only be 100 characters at max.')
      .isString().withMessage('Name must be a string.'),
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
      .isString().withMessage('Name must be a string.')
      .matches(/^(?:([A-Za-z0-9_])*)$/)
      .withMessage(
        'Username can only contain letters, numbers, or underscores.'
      )
      .isLength({min: 5, max: 22})
      .withMessage('Username must be between 5 and 22 characters.'),
    check('password')
      .not()
      .isEmpty()
      .withMessage('Password is required.')
      .isString().withMessage('Name must be a string.')
      .isLength({min: 8, max: 256})
      .withMessage('Password must be between 8 and 256 characters.')
      .not()
      .matches(pwdRegex)
      .withMessage('Password contains invalid characters.')
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
        return res.status(404).json({success: false, message: 'User not found.'});
      }
      const userData = req.body;
      let name = req.body.name;
      if (!name) {
        name = null;
      }
      const {email, username, password} = userData;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      if (req.user['_id'].toString() === id.toString()) {
        await User.updateUser({_id: id}, userData, {}, (err, user) => {
          if (err) {
            switch (err.name) {
              case 'CastError':
                return res.status(404).json({success: false, ...err});
              case 'ValidationError':
                return res.status(406).json({success: false, ...err});
              default:
                return res.status(500).json({success: false, ...err});
            }
          }
          if (!user) {
            return res.status(404).json({
              success: false,
              message: 'Error 404: user not found.'
            });
          }
          getUserById({_id: id}, req, res, user => {
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
      } else {
        getUserById({_id: id}, req, res, () => {
          return res.status(403).json({
            success: false,
            message: 'You cannot update this user.'
          });
        });
      }
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
httpRouter.patch(
  '/:id',
  [
    body(fieldsToSanitize)
      .trim()
      .escape()
  ],
  auth,
  async (req, res, next) => {
    try {
      let id;
      try {
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
        return res.status(404).json({success: false, message: 'User not found.'});
      }
      const query = req.body;
      const pwRegex = pwdRegex;
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
        } else isValid = !(field === 'password' && pwRegex.test(field));
      }
      if (!isValid) {
        return res
          .status(406)
          .json({success: false, message: 'Data not valid.'});
      }
      if (new ValidatePatchRequest(req).validateUserPatch(res)) {
        return;
      }
      if (req.user['_id'].toString() === id.toString()) {
        await User.patchUser({_id: id}, {$set: query}, (err, status) => {
          if (err) {
            switch (err.name) {
              case 'CastError':
                return res.status(404).json({success: false, ...err});
              case 'ValidationError':
                return res.status(406).json({success: false, ...err});
              default:
                return res.status(500).json({success: false, ...err});
            }
          }
          if (!status) {
            return res.status(502).json({
              success: false,
              message: 'Bad gateway.'
            });
          }
          getUserById({_id: id}, req, res, user => {
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
      } else {
        getUserById({_id: id}, req, res, () => {
          return res.status(403).json({
            success: false,
            message: 'You cannot patch this user.'
          });
        });
      }
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Delete All Users.
 * @description Deletes all users in the database.
 */
httpRouter.delete('/', auth, async (req, res, next) => {
  try {
    await User.deleteAllUsers((err, status) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({success: false, ...err});
        }
        return res.status(500).json({success: false, ...err});
      }
      if (!status) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      Rom.deleteAllRoms({}, (err, romsStatus) => {
        if (err) {
          return res.status(500).json({success: false, ...err});
        }
        if (!romsStatus) {
          return res.status(500).json({
            success: false
          });
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
httpRouter.delete('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'User not found.'});
    }
    if (req.user['_id'].toString() === id.toString()) {
      getUserById({_id: id}, req, res, () => {
        User.deleteUser({_id: id}, (err, status) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({success: false, ...err});
            }
            return res.status(500).json({success: false, ...err});
          }
          if (!status) {
            return res.status(502).json({
              success: false,
              message: 'Bad gateway.'
            });
          }
          Rom.deleteAllRoms({userId: id}, (err, romsStatus) => {
            if (err) {
              if (err.name === 'CastError') {
                return res.status(404).json({success: false, ...err});
              }
              return res.status(500).json({success: false, ...err});
            }
            if (!romsStatus) {
              return res.status(404).json({
                success: false,
                message: 'Error 404: user not found.'
              });
            }
            return res.status(200).json({
              success: true,
              message: 'User successfully deleted!',
              ...status
            });
          });
        });
      });
    } else {
      getUserById({_id: id}, req, res, () => {
        return res.status(403).json({
          success: false,
          message: 'You cannot delete this user.'
        });
      });
    }
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Head Info.
 * @description Get's header info for entire /api/users route.
 */
httpRouter.head('/', auth, async (req, res, next) => {
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
httpRouter.head('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'User not found.'});
    }
    await getUserById({_id: id}, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
});

httpRouter.all('/*', async (req, res, next) => {
  try {
    res.set('Allow', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
    await res.status(405).json({success: false, message: 'Method not allowed.'});
  } catch (err) {
    next(err);
  }
});
// use this to make httpRouter available to middleware
module.exports = httpRouter;
