const mongoose = require('mongoose');
// const uuid = require('uuid');

/*
 * uuid.v1()
 * uuid.v4()
 */

// create mongoose schema
const VersionSchema = mongoose.Schema(
  {
    apiVersion: String
  },
  {
    versionKey: false
  }
);

// create version model
const Version = (module.exports = mongoose.model('Version', VersionSchema));

/**
 * @summary Get API Version
 * @description Gets the API's version.
 * @param {string} apiVersion The API's version.
 * @returns {Version} Version object.
 */
module.exports.getApiVersion = apiVersion => {
  const version = new Version({apiVersion});
  return version;
};
