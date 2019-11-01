const moment = require('moment');
const config = require('config');
const url = require('url');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
const secret = config.get('secret');
const User = require('../models/User');
const Rom = require('../models/Rom');
const romsData = require('../database/data.json');
const [, clearCache] = require('../middleware/cache');

const pwdRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;

Number.prototype.convertUnitOfTimeToSeconds = function(unit) {
  const value = parseInt(this, 10);
  switch (unit) {
    case 'second':
    case 'seconds':
      return value;
    case 'minute':
    case 'minutes':
      return value * 60;
    case 'hour':
    case 'hours':
      return value * 60 ** 2;
    case 'day':
    case 'days':
      return value * 60 ** 2 * 24;
    case 'week':
    case 'weeks':
      return value * 60 ** 2 * 24 * 7;
    case 'month':
    case 'months':
      return value * 60 ** 2 * 24 * 7 * 30;
    case 'year':
    case 'years':
      return value * 60 ** 2 * 24 * 7 * 30 * 12;
    default:
      break;
  }
};

const routesWithParams = ['authenticate', 'register'];

function checkSingleErr(err, req, res) {
  if (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
}

function checkValidId(id, req, res) {
  try {
    if (routesWithParams.includes(req.params.id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    id = mongoose.Types.ObjectId(req.params.id);
  } catch (e) {
    return res.status(404).json({ success: false, message: 'User not found.' });
  }
  return id;
}

function checkMultipleErrs(err, req, res) {
  if (err) {
    switch (err.name) {
      case 'CastError':
        return res.status(404).json({ success: false, ...err });
      case 'ValidationError':
        return res.status(406).json({ success: false, ...err });
      default:
        return res.status(500).json({ success: false, ...err });
    }
  }
}

function getUserById(id, req, res, callback) {
  return User.getUserById(id, (err, user) => {
    checkSingleErr(err, req, res);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Error 404: user not found.' });
    }
    return callback(user);
  });
}

module.exports.getUsers = async (req, res, next) => {
  try {
    await User.getAllUsers((err, users) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
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
};

module.exports.getUser = async (req, res, next) => {
  try {
    let id = null;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      req.params.username = req.params.id;
      return await this.getUserByUsername(req, res, next);
    }
    if (req.user['_id'].toString() === id.toString()) {
      await User.getUserById(id, (err, user) => {
        checkSingleErr(err, req, res);
        if (!user) {
          return res
            .status(404)
            .json({ success: false, message: 'Error 404: user not found.' });
        }
        return res.status(200).json(user);
      });
    } else {
      await getUserById(id, req, res, () => {
        return res.status(403).json({
          success: false,
          message: `You cannot get this user's data.`
        });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getUserByUsername = async (req, res, next) => {
  try {
    const username = req.params.username;
    if (routesWithParams.includes(username)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    if (req.user.username === username) {
      await User.getUserByUsername(username, (err, user) => {
        checkSingleErr(err, req, res);
        if (!user) {
          return res
            .status(404)
            .json({ success: false, message: 'Error 404: user not found.' });
        }
        return res.status(200).json(user);
      });
    } else {
      await User.getUserByUsername(username, (err, user) => {
        checkSingleErr(err, req, res);
        if (!user) {
          return res
            .status(404)
            .json({ success: false, message: 'Error 404: user not found.' });
        }
        return res.status(403).json({
          success: false,
          message: `You cannot get this user's data.`
        });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.registerUser = async (req, res, next) => {
  try {
    const newUser = new User({
      name: req.sanitize(req.body.name) || null,
      username: req.sanitize(req.body.username),
      password: req.sanitize(req.body.password)
    });
    const { name, username, password } = newUser;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    let isValid = true;
    for (const field of Object.keys(req.body)) {
      if (!['name', 'username', 'password'].includes(field)) {
        isValid = false;
        break;
      } else {
        isValid = !(field === 'password' && pwdRegex.test(field));
        req.sanitize(field);
      }
    }
    if (!isValid) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    await User.addUser(
      newUser,
      async (err, user) => {
        try {
          if (err) {
            if (err.name === 'ValidationError') {
              return res.status(406).json({ success: false, ...err });
            }
            return res.status(500).json({ success: false, ...err });
          }
          if (!user) {
            return res.status(500).json({
              success: false
            });
          }
          await Rom.postCore(romsData[0], user, (err, roms) => {
            if (err) {
              return res.status(500).json({ success: false, ...err });
            }
            if (!roms) {
              return res
                .status(502)
                .json({ success: false, message: 'Bad gateway.' });
            }
            return console.log(`Core ROMs added for user '${user.username}'.`);
          });
          await Rom.postHacks(romsData[1], user, (err, roms) => {
            if (err) {
              return res.status(500).json({ success: false, ...err });
            }
            if (!roms) {
              return res
                .status(502)
                .json({ success: false, message: 'Bad gateway.' });
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
          res.append(
            'Created-At',
            moment()
              .subtract(7, 'hours')
              .format()
          );
          clearCache(req);
          return res
            .status(201)
            .json({ success: true, message: 'User successfully registered!' });
        } catch (err) {
          next(err);
        }
      },
      () => {
        return res.status(500).json({
          success: false,
          message: 'User with username already exists.'
        });
      }
    );
  } catch (err) {
    next(err);
  }
};

module.exports.authorizeUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    let isValid;
    for (const field of Object.keys(req.body)) {
      if (!['username', 'password'].includes(field)) {
        isValid = false;
        break;
      } else {
        isValid = true;
        req.sanitize(field);
      }
    }
    if (!isValid) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    await User.getUserByUsername(username, async (err, user) => {
      try {
        checkMultipleErrs(err, req, res);
        if (!user)
          return res.status(404).json({
            success: false,
            message: 'Error: User not found.'
          });
        // check entered if password matches username's password
        await User.comparePassword(password, user.password, (err, isMatch) => {
          if (err) {
            return res.status(403).json({ success: false, ...err });
          }
          if (isMatch) {
            const token = jwt.sign({ data: user }, secret, {
              expiresIn: (1).convertUnitOfTimeToSeconds('week')
            });
            return res.status(202).json({
              success: true,
              token: `Bearer ${token}`,
              user: {
                id: user._id,
                name: user.name,
                username: user.username
              }
            });
          }
          return res
            .status(403)
            .json({ success: false, message: 'Error: wrong password.' });
        });
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    const userData = {
      name: req.sanitize(req.body.name) || null,
      username: req.sanitize(req.body.username),
      password: req.sanitize(req.body.password)
    };
    const { name, username, password } = userData;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    let isValid = true;
    for (const field of Object.keys(req.body)) {
      if (!['_id', 'name', 'username', 'password'].includes(field)) {
        isValid = false;
        break;
      } else {
        isValid = !(field === 'password' && pwdRegex.test(field));
        req.sanitize(field);
      }
    }
    if (!isValid) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    if (req.user['_id'].toString() === id.toString()) {
      await User.updateUser(
        id,
        userData,
        {},
        async (err, user) => {
          try {
            checkMultipleErrs(err, req, res);
            if (!user) {
              return res.status(404).json({
                success: false,
                message: 'Error 404: user not found.'
              });
            }
            await getUserById(id, req, res, user => {
              clearCache(req);
              return res.status(200).json(user);
            });
          } catch (err) {
            next(err);
          }
        },
        () => {
          return res.status(500).json({
            success: false,
            message: 'A user with that username already exists.'
          });
        }
      );
    } else {
      await getUserById(id, req, res, () => {
        return res.status(403).json({
          success: false,
          message: 'You cannot update this user.'
        });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.patchUser = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    const query = req.body;
    const { username, password, name } = query;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    let isValid = true;
    for (const field of Object.keys(req.body)) {
      if (!['_id', 'name', 'username', 'password'].includes(field)) {
        isValid = false;
        break;
      } else {
        isValid = !(field === 'password' && pwdRegex.test(field));
        req.sanitize(field);
      }
    }
    if (!isValid) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    if (req.user['_id'].toString() === id.toString()) {
      const updateQuery = { $set: query };
      await User.patchUser(
        id,
        updateQuery,
        async (err, status) => {
          try {
            checkMultipleErrs(err, req, res);
            if (!status) {
              return res.status(502).json({
                success: false,
                message: 'Bad gateway.'
              });
            }
            await getUserById(id, req, res, user => {
              clearCache(req);
              return res.status(200).json(user);
            });
          } catch (err) {
            next(err);
          }
        },
        () => {
          return res.status(500).json({
            success: false,
            message: 'A user with that username already exists.'
          });
        }
      );
    } else {
      await getUserById(id, req, res, () => {
        return res.status(403).json({
          success: false,
          message: 'You cannot patch this user.'
        });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUsers = async (req, res, next) => {
  try {
    await User.deleteAllUsers(async (err, status) => {
      try {
        checkSingleErr(err, req, res);
        if (!status) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
        await Rom.deleteAllRoms({}, (err, romsStatus) => {
          if (err) {
            return res.status(500).json({ success: false, ...err });
          }
          if (!romsStatus) {
            return res.status(500).json({
              success: false
            });
          }
          clearCache(req);
          return res.status(200).json({
            success: true,
            message: 'All users successfully deleted!',
            ...status
          });
        });
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    if (req.user['_id'].toString() === id.toString()) {
      await getUserById(id, req, res, async () => {
        try {
          await User.deleteUser(id, async (err, status) => {
            try {
              checkSingleErr(err, req, res);
              if (!status) {
                return res.status(502).json({
                  success: false,
                  message: 'Bad gateway.'
                });
              }
              const query = { user_id: id };
              await Rom.deleteAllRoms(query, (err, romsStatus) => {
                checkSingleErr(err, req, res);
                if (!romsStatus) {
                  return res.status(404).json({
                    success: false,
                    message: 'Error 404: user not found.'
                  });
                }
                clearCache(req);
                return res.status(200).json({
                  success: true,
                  message: 'User successfully deleted!',
                  ...status
                });
              });
            } catch (err) {
              next(err);
            }
          });
        } catch (err) {
          next(err);
        }
      });
    } else {
      await getUserById(id, req, res, () => {
        return res.status(403).json({
          success: false,
          message: 'You cannot delete this user.'
        });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.usersHeaders = (req, res) => {
  res.status(200);
};

module.exports.userHeaders = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    await getUserById(id, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.all = (req, res) => {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
  if (methods.includes(req.method)) {
    res.set('Allow', methods.join(', '));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
