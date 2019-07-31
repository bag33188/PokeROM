const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
// create schema
const userSchema = new Schema({
  name: {
    type: String,
    minlength: [1, 'Name is too short.'],
    maxlength: [100, 'Name is too long.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    minlength: [3, 'Email is too short.'],
    maxlength: [55, 'Email is too long.'],
    validate: {
      validator: function(v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        );
      },
      message: props => `${props.value} is not a valid email.`
    }
  },
  username: {
    type: String,
    required: [true, 'A username is required.'],
    minlength: [5, 'Username must be at least 5 characters.'],
    maxlength: [22, 'Username must be less than 22 characters.']
  },
  password: {
    type: String,
    required: [true, 'A password is required.'],
    minlength: [8, 'Password must be at least 10 characters.'],
    maxlength: [256, 'Password must be less than 256 characters.'] //,
    // validate: {
    //   validator: function(v) {
    //     return !/(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi.test(
    //       v
    //     );
    //   }
    // }
  }
});

// create User model
const User = (module.exports = mongoose.model('User', userSchema));

/**
 * @summary Get user by ID.
 * @description Gets a single user by its ID.
 * @param {object} query The ID query for getting the user.
 * @param {any} callback The callback function.
 */
module.exports.getUserById = (query, callback) => {
  User.findById(query, callback);
};

/**
 * @summary Get user by username.
 * @description Gets a user by their username.
 * @param {string} username The username of the user to find.
 * @param {any} callback The callback function.
 */
module.exports.getUserByUsername = (username, callback) => {
  const query = { username: username };
  User.findOne(query, callback);
};

/**
 * @summary Add user.
 * @description Adds a user to the database.
 * @param {User} newUser The new user data.
 * @param {any} callback The callback function.
 * @param errCallbacks An array that contains the errors for existing email and username.
 */
module.exports.addUser = (newUser, callback, errCallbacks) => {
  // check if user already exists
  User.findOne({ email: newUser.email }) // check email first
    .then((user, err) => {
      if (err) {
        console.log(err);
      } else if (user) {
        errCallbacks[0]();
      } else {
        User.findOne({ username: newUser.username }) // then check username
          .then((user, err) => {
            if (err) {
              console.log(err);
            } else if (user) {
              errCallbacks[1]();
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
      }
    })
    .catch(err => console.log(err));
};

/**
 * @summary Compare password.
 * @description Compares the entered password with the corresponding user's password.
 * @param {string} candidatePassword The password to compare.
 * @param {string} hash The hashed password.
 * @param {any} callback The callback function.
 */
module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) {
      console.log(err);
    }
    callback(null, isMatch);
  });
};

/**
 * @summary Delete all users.
 * @description Deletes all users in the database.
 * @param {any} callback The callback function.
 */
module.exports.deleteAllUsers = callback => {
  User.deleteMany(callback);
};

/**
 * @summary Delete single user.
 * @description Deletes a single user in the database.
 * @param {string} id The ID of the user to delete.
 * @param {any} callback The callback function.
 */
module.exports.deleteUser = (id, callback) => {
  User.findOneAndDelete(id, callback);
};

/**
 * @summary Get all users.
 * @description Gets all users in the database.
 * @param {any} callback The callback function.
 */
module.exports.getAllUsers = callback => {
  User.find(callback);
};

/**
 * @summry Update User
 * @description Updates a user in the database.
 * @param {string} query The id query to update with.
 * @param {User} userData The user data to update with.
 * @param {object} options Any update options (not using any here).
 * @param {Resonse} callback The callback function.
 */
module.exports.updateUser = (query, userData, options, callback) => {
  const { name, email, username, password } = userData;
  const userQuery = {
    name,
    email,
    username,
    password
  };
  bcrypt.genSalt(10, (err, salt) => {
    if (err) console.log(err);
    bcrypt.hash(userQuery.password, salt, (err, hash) => {
      if (err) console.log(err);
      // update password as hash
      userQuery.password = hash;
      User.findOneAndUpdate(query, userQuery, options, callback);
    });
  });
};

/**
 * @summary Patch User
 * @description Partially updates a user in the database.
 * @param {object} idQuery The id query to partially update the user.
 * @param {object} userQuery The user data to partially update the user with.
 * @param {any} callback The callback function.
 */
module.exports.patchUser = (idQuery, userQuery, callback) => {
  if (!userQuery['$set'].password) {
    User.updateOne(idQuery, userQuery, callback);
  } else {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) console.log(err);
      bcrypt.hash(userQuery['$set'].password, salt, (err, hash) => {
        if (err) console.log(err);
        // update password as hash
        userQuery['$set'].password = hash;
        User.updateOne(idQuery, userQuery, callback);
      });
    });
  }
};
