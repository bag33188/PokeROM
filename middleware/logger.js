const moment = require('moment');

function logger(req, res, next) {
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  if (process.env.NODE_ENV === 'production') {
    console.log(
      `${req.method} ${url} ${moment()
        .subtract(8, 'hours') // pacific standard time
        .format('LLLL')}`
    );
  } else {
    console.log(`${req.method} ${url} ${moment().format('LLLL')}`);
  }
  next();
}

function findUTCTimeOffset() {
  const nowLocal = new Date();
  const nowUtc = new Date();
  const localHours = nowLocal.getHours();
  const utcHours = nowUtc.getUTCHours();
  return utcHours - localHours;
}

if (process.env.NODE_ENV !== 'production') {
  console.log(`UTC time offset: ${findUTCTimeOffset()}`);
}

module.exports = logger;
