const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      minlength: [1, 'Name is too short.'],
      maxlength: [100, 'Name is too long.']
    },
    username: {
      type: String,
      required: [true, 'A username is required.'],
      minlength: [3, 'Username must be at least 3 characters.'],
      maxlength: [22, 'Username must be less than 22 characters.']
    },
    password: {
      type: String,
      required: [true, 'A password is required.'],
      minlength: [6, 'Password must be at least 6 characters.'],
      maxlength: [256, 'Password must be less than 256 characters.']
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
  const query = { username: username };
  return User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback) => {
  return newUser.save(callback);
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
  return User.findOneAndUpdate({ _id: id }, userData, options, callback);
};

module.exports.patchUser = (id, updateQuery, callback) => {
  const searchQuery = { _id: id };
  return User.updateOne(searchQuery, updateQuery, callback);
};
