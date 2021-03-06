const mongoose = require('mongoose');
const config = require('config');
const {
  certificate,
  certificateKey,
  certificateAuthority
} = require('./certs.js');

const db = config.get('mongoURI');

/**
 * @function
 * @async
 * @name connectDB
 * @summary Connect to Database
 * @description Connects to MongoDB.
 * @param {object} options Options to avoid deprecation.
 * @returns {Promise<void>} Database connection.
 */
async function connectDB(options) {
  // avoid using js assumptions when dealing with option params
  if (options !== undefined && options !== null) {
    if (
      options.constructor === Object &&
      options.hasOwnProperty('useFindAndModify')
    ) {
      const key = Object.keys(options)[0];
      mongoose.set(key, options[key]);
    } else {
      console.log('Invalid option(s) for connectDB function.');
    }
  } else {
    options = {};
  }
  try {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        ssl: true,
        sslValidate: true,
        sslCert: certificate,
        sslKey: certificateKey,
        sslCA: certificateAuthority
      });
    } else {
      await mongoose.connect(db, {
        useNewUrlParser: true
      });
    }
    console.log(`Connected to database ${config.mongoURI}`);
  } catch (err) {
    console.error(`Database error: `, err);
    // process.exit(1);
  }
}

module.exports = connectDB;
