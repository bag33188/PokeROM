const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');

const db = config.get('mongoURI');
const {
  certificate,
  certificateKey,
  certificateAuthority
} = require('./cert.js');

async function connectDB(options) {
  if (options !== undefined) {
    if (options['useFindAndModify'] === false) {
      // use to avoid deprecation
      mongoose.set('useFindAndModify', false);
    } else {
      mongoose.set('useFindAndModify', true);
    }
  }
  try {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        promiseLibrary: bluebird,
        ssl: true,
        sslValidate: true,
        sslCert: certificate,
        sslKey: certificateKey,
        sslCA: certificateAuthority
      });
    } else {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        promiseLibrary: bluebird
      });
    }
    console.log(`Connected to database ${config.mongoURI}`);
  } catch (err) {
    console.error(`Database error: ${err}`);
    // process.exit(1);
  }
}

module.exports = connectDB;
