const mongoose = require('mongoose');
// const uuid = require('uuid');

/*
 * uuid.v1()
 * uuid.v4()
 */

const Schema = mongoose.Schema;

const versionSchema = new Schema(
  {
    api_version: String
  },
  {
    _id: false,
    versionKey: false
  }
);

const Version = (module.exports = mongoose.model('Version', versionSchema));

module.exports.getApiVersion = apiVersion => {
  const query = { api_version: apiVersion };
  return new Version(query);
};
