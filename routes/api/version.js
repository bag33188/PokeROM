const express = require('express');
const swaggerDoc = require('../../docs/swaggerDoc');
const Version = require('../../models/Version');

const httpRouter = express.Router();

// get api version
/**
 * @summary Get API Version.
 * @description Gets the API's version.
 */
httpRouter.get('/', async (req, res, next) => {
  try {
    const [, version] = swaggerDoc;
    const apiVersion = Version.getApiVersion(version);
    await res.status(200).json(apiVersion);
  } catch (err) {
    next(err);
  }
});

httpRouter.all('/*', async (req, res, next) => {
  try {
    const methods = ['GET'];
    if (methods.includes(req.method)) {
      res.set('Allow', methods.join(''));
      return await res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    } else {
      return await res
        .status(501)
        .json({ success: false, message: 'Method not implemented.' });
    }
  } catch (err) {
    next(err);
  }
});

// export httpRouter
module.exports = httpRouter;
