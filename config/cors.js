const cors = require('cors');

module.exports = cors({
  credentials: true,
  exposedHeaders: [
    'Cache-Control',
    'Content-Language',
    'Content-Type',
    'Expires',
    'Last-Modified',
    'Pragma',
    'Content-Range',
    'X-Content-Range'
  ],
  headers: [
    'Accept',
    'Accept-Language',
    'Authorization',
    'Content-Type',
    'Content-Language',
    'Save-Data',
    'Viewport-Width',
    'Width'
  ],
  maxAge: 86400,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  optionsSuccessStatus: 204,
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://pokerom-broccolini.herokuapp.com'
      : 'http://localhost:4200'
});
