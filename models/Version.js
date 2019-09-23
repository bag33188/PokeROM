const mongoose = require('mongoose');
// const uuid = require('uuid');

/*
 * uuid.v1()
 * uuid.v4()
 */
const Schema = mongoose.Schema;
// create mongoose schema
const versionSchema = new Schema(
  {
    api_version: String
  },
  {
    _id: false,
    versionKey: false
  }
);

// create version model
const Version = (module.exports = mongoose.model('Version', versionSchema));

module.exports.getApiVersion = apiVersion => {
  return new Version({ apiVersion });
};
