const express = require('express');

const httpRouter = express.Router();

// get backend options
httpRouter.options('/', async (req, res, next) => {
  try {
    await res.status(204);
  } catch (err) {
    next(err);
  }
});

httpRouter.all('/*', async (req, res, next) => {
  try {
    const methods = ['OPTIONS', 'HEAD'];
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

module.exports = httpRouter;
