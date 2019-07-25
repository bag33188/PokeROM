const express = require('express');

const httpRouter = express.Router();

// get backend options
/**
 * @summary Get backend options.
 * @description Gets supported options for entire backend.
 */
httpRouter.options('/', async (req, res, next) => {
  try {
    await res.status(204);
  } catch (err) {
    next(err);
  }
});

httpRouter.all('/*', async (req, res, next) => {
  try {
    res.set('Allow', 'OPTIONS');
    await res.status(405).json({success: false, msg: 'Method not allowed.'});
  } catch (err) {
    next(err);
  }
});

module.exports = httpRouter;
