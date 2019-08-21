const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');
const db = config.get('mongoURI');
const fs = require('fs');

const ca = fs.readFileSync('auth/mongodb.crt');
const key = fs.readFileSync('auth/mongodb.pem');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      promiseLibrary: bluebird
    });
    console.log(`Connected to database ${config.mongoURI}`);
  } catch (err) {
    console.error(`Database error: ${err}`);
    // process.exit(1);
  }
};

if (process.env.NODE_ENV === 'production') {
  mongoose.ssl = true;
  mongoose.sslValidate = true;
  mongoose.sslCA = ca;
  mongoose.sslKey = key;
  mongoose.sslCert = key;
}

// use to avoid deprecation
mongoose.set('useFindAndModify', false);

module.exports = connectDB;
