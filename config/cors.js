const cors = require('cors');

module.exports = cors({
  credentials: true,
  exposedHeaders: [
    'Allow',
    'Cache-Control',
    'Content-Language',
    'Content-Type',
    'Expires',
    'Last-Modified',
    'Pragma',
    'Content-Range',
    'X-Content-Range',
    'X-Requested-With'
  ],
  headers: [
    'Accept',
    'Accept-Language',
    'Allow',
    'Authorization',
    'Content-Type',
    'Content-Language',
    'Save-Data',
    'Viewport-Width',
    'Width',
    'X-Requested-With'
  ],
  maxAge: 86400,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  optionsSuccessStatus: 204,
  origin:
    process.env.NODE_ENV === 'production'
      ? function x(req, res, next) {
          if (
            /http(s)?:\/\/(www\.)?pokerom\.dev(\/)?/.test(
              `${req.protocol}://${req.get('host')}${req.originalUrl}`
            )
          ) {
            console.log(
              `${req.protocol}://${req.get('host')}${req.originalUrl}`
            );
            return `${req.protocol}://${req.get('host')}${req.originalUrl}`;
          } else {
            return false;
          }
        }
      : 'http://localhost:4200'
});
