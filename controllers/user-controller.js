const moment = require('moment');
const config = require('config');
const url = require('url');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
const secret = config.get('secret');
const User = require('../models/User');
const Rom = require('../models/Rom');
const [coreRoms, romHacks] = require('../database/data.json');
const { clearCache } = require('../middleware/cache');

const routesWithParams = ['authenticate', 'register'];

const pwdRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;

function checkForInvalidRoute(id) {
  return routesWithParams.includes(id);
}

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

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    if (req.user._id.toString() !== id.toString()) {
      return res.status(403).json({
        success: false,
        message: `You cannot get this user's data.`
      });
    }
    const user = await User.getUserById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'Error 404: user not found.' });
    }
    return res.status(200).json(user);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const newUser = new User({
      name: req.sanitize(req.body.name) || null,
      username: req.sanitize(req.body.username),
      password: req.sanitize(req.body.password)
    });
    const user = await User.getUserByUsername(username);
    if (user) {
      return res.status(500).json({
        success: false,
        message: 'User with username already exists.'
      });
    }
    // hash password
    bcrypt.genSalt(10, (err, salt) => {
      if (err) console.log(err);
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) console.log(err);
        // store password as hash
        newUser.password = hash;
      });
    });
    const addedUser = await User.addUser(newUser);
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
    await Rom.postCore(coreRoms, addedUser);
    await Rom.postHacks(romHacks, addedUser);
    clearCache(req);
    return res
      .status(201)
      .json({ success: true, message: 'User successfully registered!' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(406).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.authorizeUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const user = await User.getUserByUsername(req.body.username);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Error: User not found.'
      });
    }
    const passwordCheck = await User.comparePassword(
      req.body.password,
      user.password
    );
    if (passwordCheck === true) {
      const payload = {
        data: user
      };
      const token = jwt.sign(payload, secret, {
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
    } else {
      return res
        .status(403)
        .json({ success: false, message: 'Error: wrong password.' });
    }
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res.status(404).json({ success: false, ...err });
      case 'ValidationError':
        return res.status(406).json({ success: false, ...err });
      default:
        return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.updateUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const userData = {
      name: req.sanitize(req.body.name) || null,
      username: req.sanitize(req.body.username),
      password: req.sanitize(req.body.password)
    };
    bcrypt.genSalt(10, (err, salt) => {
      if (err) console.log(err);
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) console.log(err);
        // update password as hash
        req.body.password = hash;
      });
    });
    if (req.user['_id'].toString() !== id.toString()) {
      const user = await User.getUserById(id);
      if (user) {
        return res.status(500).json({
          success: false,
          message: 'A user with that username already exists.'
        });
      }
      return res.status(403).json({
        success: false,
        message: 'You cannot update this user.'
      });
    }
    await User.updateUser(id, userData, {});
    clearCache(req);
    const updatedUser = await User.getUserById(id);
    return res.status(200).json(updatedUser);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res.status(404).json({ success: false, ...err });
      case 'ValidationError':
        return res.status(406).json({ success: false, ...err });
      default:
        return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.patchUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
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
    if (req.user._id.toString() !== id.toString()) {
      if (req.body.username) {
        const user = User.getUserById(id);
        if (user) {
          return res.status(500).json({
            success: false,
            message: 'A user with that username already exists.'
          });
        }
      }
      return res.status(403).json({
        success: false,
        message: 'You cannot patch this user.'
      });
    }
    if (req.body.password) {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.log(err);
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) console.log(err);
          // update password as hash
          req.body.password = hash;
        });
      });
    }

    const patchQuery = { $set: req.body };
    await User.patchUser(id, patchQuery);

    const user = await User.getUserById(id);
    clearCache(req);
    return res.status(200).json(user);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res.status(404).json({ success: false, ...err });
      case 'ValidationError':
        return res.status(406).json({ success: false, ...err });
      default:
        return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.deleteUsers = async (req, res, next) => {
  try {
    await Rom.deleteAllRoms({});
    await User.deleteAllUsers();
    clearCache(req);
    return res.status(200).json({
      success: true,
      message: 'All users successfully deleted!'
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    if (req.user['_id'].toString() !== id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'You cannot delete this user.'
      });
    }
    const user = await User.getUserById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Error 404: user not found.'
      });
    }
    const query = { user_id: id };
    await Rom.deleteAllRoms(query);
    clearCache(req);
    return res.status(200).json({
      success: true,
      message: 'User successfully deleted!'
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.usersHeaders = (req, res) => {
  res.status(200);
};

module.exports.userHeaders = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const user = await User.getUserById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found.' });
    }
    return res.status(200);
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
