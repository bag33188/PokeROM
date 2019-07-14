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

// get current offset hours from utc
/*
function findOffset() {
  const now = new Date();
  const localHours = now.getHours();
  const utcHours = now.getUTCHours();
  return utcHours - localHours; 
}
console.log(findOffset());
*/

module.exports = logger;
