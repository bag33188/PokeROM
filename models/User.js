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
const User = exports;

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = { username: username };
  User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback, errCallback) => {
  const query = { username: newUser.username };
  // check if user already exists
  User.findOne(query)
    .then((user, err) => {
      if (err) {
        console.log(err);
      } else if (user) {
        errCallback();
      } else {
        // authenticate
        bcrypt.genSalt(10, (err, salt) => {
          if (err) console.log(err);
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.log(err);
            // store password as hash
            newUser.password = hash;
            newUser.save(callback);
          });
        });
      }
    })
    .catch(err => console.log(err));
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      console.log(err);
    }
    callback(null, isMatch);
  });
};

module.exports.deleteAllUsers = callback => {
  User.deleteMany(callback);
};

module.exports.deleteUser = (id, callback) => {
  const query = { _id: id };
  User.findOneAndDelete(query, callback);
};

module.exports.getAllUsers = callback => {
  User.find(callback);
};

module.exports.updateUser = (id, userData, options, callback, errCallback) => {
  const { name, username, password } = userData;
  const searchQuery = { username };
  const userQuery = {
    name,
    username,
    password
  };
  User.findOne(searchQuery)
    .then((user, err) => {
      if (err) {
        console.log(err);
      } else if (user && id.toString() !== user._id.toString()) {
        errCallback();
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) console.log(err);
          bcrypt.hash(userQuery.password, salt, (err, hash) => {
            if (err) console.log(err);
            // update password as hash
            userQuery.password = hash;
            User.findOneAndUpdate({ _id: id }, userQuery, options, callback);
          });
        });
      }
    })
    .catch(err => console.log(err));
};

module.exports.patchUser = (id, updateQuery, callback, errCallback) => {
  if (updateQuery['$set'].username !== undefined) {
    const searchQuery = { username: updateQuery['$set'].username };
    User.findOne(searchQuery)
      .then((user, err) => {
        if (err) {
          console.log(err);
        } else if (user && id.toString() !== user._id.toString()) {
          errCallback();
        } else {
          const query = { _id: id };
          User.updateOne(query, updateQuery, callback);
        }
      })
      .catch(err => console.log(err));
  } else {
    const query = { _id: id };
    if (updateQuery['$set'].password === undefined) {
      User.updateOne(query, updateQuery, callback);
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.log(err);
        bcrypt.hash(updateQuery['$set'].password, salt, (err, hash) => {
          if (err) console.log(err);
          // update password as hash
          updateQuery['$set'].password = hash;
          User.updateOne(query, updateQuery, callback);
        });
      });
    }
  }
};
