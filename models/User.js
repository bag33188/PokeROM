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
    email: {
      type: String,
      required: false,
      minlength: [4, 'Email is too short.'],
      maxlength: [55, 'Email is too long.'],
      validate: {
        validator: v => {
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
      //   validator: (v) => {
      //     return !/(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi.test(
      //       v
      //     );
      //   }
      // }
    }
  },
  {
    versionKey: false
  }
);

// create User model
const User = (module.exports = mongoose.model('User', userSchema));

module.exports.getUserById = (query, callback) => {
  User.findById(query, callback);
};

module.exports.getUserByUsername = (username, callback) => {
  const query = { username: username };
  User.findOne(query, callback);
};

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
  User.findOneAndDelete(id, callback);
};

module.exports.getAllUsers = callback => {
  User.find(callback);
};

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
