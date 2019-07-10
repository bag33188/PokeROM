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
  moment().locale('en');
  moment().utcOffset(8);
  console.log(`${req.method} ${url} ${moment().format('LLLL')}`);
  next();
}

module.exports = logger;