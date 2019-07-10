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
    `${req.method} (${res.statusCode}) ${url} ${moment()
      .subtract(7, 'hours') // pacific standard time
      .format('LLLL')}`
  );
  next();
}

/*
function findOffset() {
  const now = new Date().getHours();
  const utc = new Date().getUTCHours();
  return utc - now;
}
console.log(findOffset());
*/

module.exports = logger;
