const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const usersValidator = require('../validation/users-validator');

const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      minlength: [usersValidator.name[0], 'Name is too short.'],
      maxlength: [usersValidator.name[1], 'Name is too long.']
    },
    username: {
      type: String,
      required: [true, 'A username is required.'],
      minlength: [
        usersValidator.username[0],
        `Username must be at least ${usersValidator.username[0]} characters.`
      ],
      maxlength: [
        usersValidator.username[1],
        `Username must be less than ${usersValidator.username[1]} characters.`
      ]
    },
    password: {
      type: String,
      required: [true, 'A password is required.'],
      minlength: [
        usersValidator.password[0],
        `Password must be at least ${usersValidator.password[0]} characters.`
      ],
      maxlength: [
        usersValidator.password[1],
        `Password must be less than ${usersValidator.password[1]} characters.`
      ]
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('User', userSchema);

// define User model
const User = module.exports;

module.exports.getUserById = (id, callback) => {
  return User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = { username };
  return User.findOne(query, callback);
};

module.exports.addUser = (userData, callback) => {
  return userData.save(callback);
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  return bcrypt.compare(candidatePassword, hash, callback);
};

module.exports.deleteAllUsers = callback => {
  return User.deleteMany(callback);
};

module.exports.deleteUser = (id, callback) => {
  const query = { _id: id };
  return User.findOneAndDelete(query, callback);
};

module.exports.getAllUsers = callback => {
  return User.find(callback);
};

module.exports.updateUser = (id, userData, options, callback) => {
  const query = { _id: id };
  return User.findOneAndUpdate(query, userData, options, callback);
};

module.exports.patchUser = (id, updateQuery, callback) => {
  const searchQuery = { _id: id };
  return User.updateOne(searchQuery, updateQuery, callback);
};
