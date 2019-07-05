const mongoose = require('mongoose');
const uuid = require('uuid');

// create mongoose schema
const VersionSchema = mongoose.Schema({
  versionId: String,
  apiVersion: String
});

// create version model
const Version = module.exports = mongoose.model('Version', VersionSchema);

/**
 * @summary Get API Version
 * @description Gets the API's version.
 * @param {string} apiVersion The API's version.
 * @returns {Version} Version object.
 */
module.exports.getApiVersion = function (apiVersion) {
  const version = new Version({ versionId: uuid.v4(), apiVersion });
  return version;
};
