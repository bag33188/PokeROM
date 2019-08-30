const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');
const fs = require('fs');
const db = config.get('mongoURI');

const connectDB = () => {
  if (process.env.NODE_ENV === 'production') {
    const key = fs.readFileSync('database/mongodb.pem');
    const ca = fs.readFileSync('database/mongodb.crt');
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        promiseLibrary: bluebird,
        ssl: true,
        sslValidate: true,
        sslCA: ca,
        sslKey: key,
        sslCert: key
      })
      .then(() => console.log(`Connected to database ${config.mongoURI}`))
      .catch(err => console.error(`Database error: ${err}`));
  } else {
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        promiseLibrary: bluebird
      })
      .then(() => console.log(`Connected to database ${config.mongoURI}`))
      .catch(err => console.error(`Database error: ${err}`));
  }
};

// use to avoid deprecation
mongoose.set('useFindAndModify', false);

module.exports = connectDB;
