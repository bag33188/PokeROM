const moment = require('moment');

module.exports = (req, res, obj, checkUser) => {
  res.append(
    'Created-At-Route',
    `${url
      .format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      })
      .replace(checkUser === true ? '/register' : null, '')}/${obj._id}`
  );
  res.append(
    'Created-At',
    moment()
      .subtract(8, 'hours')
      .format()
  );
};
