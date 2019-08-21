const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');
const db = config.get('mongoURI');
const fs = require('fs');

const ca = fs.readFileSync('auth/mongodb.crt');
const key = fs.readFileSync('auth/mongodb.pem');

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'production') {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      promiseLibrary: bluebird,
      ssl: true,
      sslValidate: true,
      sslCA: ca,
      sslKey: key,
      sslCert: key
    });
    } else {    await mongoose.connect(db, {

           useNewUrlParser: true,
      promiseLibrary: bluebird

    })}
    console.log(`Connected to database ${config.mongoURI}`);
  } catch (err) {
    console.error(`Database error: ${err}`);
    // process.exit(1);
  }
};

// use to avoid deprecation
mongoose.set('useFindAndModify', false);

module.exports = connectDB;
