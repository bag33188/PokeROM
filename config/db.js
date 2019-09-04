const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');
const fs = require('fs');
const db = config.get('mongoURI');

const connectDB = async () => {
  // use to avoid deprecation
  mongoose.set('useFindAndModify', false);
  try {
    if (process.env.NODE_ENV === 'production') {
      const key = fs.readFileSync('database/mongodb.pem');
      const ca = fs.readFileSync('database/mongodb.crt');
      await mongoose.connect(db, {
        useNewUrlParser: true,
        promiseLibrary: bluebird,
        ssl: true,
        sslValidate: true,
        sslCA: ca,
        sslKey: key,
        sslCert: key
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
};

module.exports = connectDB;
