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

/**
 * @summary Get API Version
 * @description Gets the API's version.
 * @param {string} api_version The API's version.
 * @returns {Version} Version object.
 */
module.exports.getApiVersion = api_version => {
  const version = new Version({ api_version });
  return version;
};
