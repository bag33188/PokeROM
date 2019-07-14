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
  if (process.env.NODE_ENV === 'production') {
    console.log(
      `${req.method} ${url} ${moment()
        .subtract(7, 'hours') // pacific standard time
        .format('LLLL')}`
    );
  } else {
    console.log(`${req.method} ${url} ${moment().format('LLLL')}`);
  }
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
