const express = require('express');
const swaggerDoc = require('../../docs/swaggerDoc');
const Version = require('../../models/Version');
const router = express.Router();

// get api version
/**
 * @summary Get API Version.
 * @description Gets the API's version.
 */
router.get('/', async (req, res, next) => {
  try {
    const [, version] = swaggerDoc;
    const apiVersion = Version.getApiVersion(version);
    await res.status(200).json(apiVersion);
  } catch (err) {
    next(err);
  }
});

// export router
module.exports = router;
