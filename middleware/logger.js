const moment = require('moment');

/**
 * @summary Log request.
 * @description Logs the request with the exact date and time
 * @param {object} req JSON request body.
 * @param {object} res JSON response.
 * @param {any} next Next callback.
 */
function logger(req, res, next) {
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log(
    `${req.method} ${url} ${moment()
      .subtract(7, 'hours')
      .format('LLLL')}`
  );
  next();
}

module.exports = logger;
