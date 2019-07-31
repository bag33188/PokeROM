const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');
const db = config.get('mongoURI');

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

// use bluebird promise library
mongoose.Promise = bluebird;

// use to avoid deprecation
mongoose.set('useFindAndModify', false);

module.exports = connectDB;
