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

router.all('/*', async (req, res) => {
  res.set('Allow', 'GET');
  await res.status(405).json({success: false, msg: 'Method not allowed.'});
});
// export router
module.exports = router;
