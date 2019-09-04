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
      const certificate = fs
        .readFileSync('database/mongodb.pem', 'utf8')
        .split('\n')
        .slice(0, 35)
        .join('\n');
      const certificateKey = fs
        .readFileSync('database/mongodb.pem', 'utf8')
        .split('\n')
        .splice(35, 61)
        .join('\n');
      const certificateAuthority = fs.readFileSync(
        'database/mongodb.crt',
        'utf8'
      );
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
};

module.exports = connectDB;
