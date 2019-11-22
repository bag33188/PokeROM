const moment = require('moment');
const config = require('config');
const url = require('url');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');
const secret = config.get('secret');
const User = require('../models/User');
const Rom = require('../models/Rom');
const [coreRoms, romHacks] = require('../database/data.json');
const { clearCache } = require('../middleware/cache');

const routesWithParams = ['authenticate', 'register'];
const fields = ['_id', 'name', 'username', 'password'];

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
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.getUser = async (req, res) => {
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
        .json({ success: false, message: 'User not found.' });
    }
    return res.status(200).json(user);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'User not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const userData = new User({
      name: req.sanitize(req.body.name) || null,
      username: req.sanitize(req.body.username),
      password: req.sanitize(req.body.password)
    });
    const user = await User.getUserByUsername(userData.username);
    if (user) {
      return res.status(500).json({
        success: false,
        message: 'User with username already exists.'
      });
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    const addedUser = await User.addUser(userData);
    res.append(
      'Created-At-Route',
      `${url
        .format({
          protocol: req.protocol,
          host: req.get('host'),
          pathname: req.originalUrl
        })
        .replace('/register', '')}/${addedUser._id}`
    );
    res.append(
      'Created-At',
      moment()
        .subtract(8, 'hours')
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
      return res
        .status(406)
        .json({ success: false, message: 'Request body is invalid.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.authorizeUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const user = await User.getUserByUsername(req.body.username);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }
    const passwordsMatch = await User.comparePassword(
      req.body.password,
      user.password
    );
    if (passwordsMatch === true) {
      const payload = {
        data: user
      };
      const token = jwt.sign(payload, secret, {
        expiresIn: (1).convertUnitOfTimeToSeconds('week')
      });
      return res.status(202).json({
        success: true,
        token: `Bearer ${token}`,
        user: user.select('-password')
      });
    } else {
      return res
        .status(403)
        .json({ success: false, message: 'Error: wrong password.' });
    }
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res
          .status(404)
          .json({ success: false, message: 'User not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Request body is invalid.' });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.updateUser = async (req, res) => {
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
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, salt);
    if (req.user._id.toString() !== id.toString()) {
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
    const updatedUser = await User.getUserById(id);
    clearCache(req);
    return res.status(200).json(updatedUser);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res
          .status(404)
          .json({ success: false, message: 'User not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Request body is invalid.' });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.patchUser = async (req, res) => {
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
      if (!fields.includes(field)) {
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
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const query = { $set: req.body };
    await User.patchUser(id, query);

    const patchedUser = await User.getUserById(id);
    clearCache(req);
    return res.status(200).json(patchedUser);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res
          .status(404)
          .json({ success: false, message: 'User not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Request body is invalid.' });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.deleteUsers = async (req, res) => {
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
      return res
        .status(404)
        .json({ success: false, message: 'User not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.deleteUser = async (req, res) => {
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
        message: 'You cannot delete this user.'
      });
    }
    const user = await User.getUserById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found.'
      });
    }
    await User.deleteUser(id);
    const query = { user_id: id };
    await Rom.deleteAllRoms(query);
    clearCache(req);
    return res.status(200).json({
      success: true,
      message: 'User successfully deleted!'
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'User not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.usersHeaders = (req, res) => {
  res.status(200);
};

module.exports.userHeaders = async (req, res) => {
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
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
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
