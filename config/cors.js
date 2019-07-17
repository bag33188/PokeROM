const cors = require('cors');

const corsConfig = cors({
  credentials: true,
  exposedHeaders: [
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
      ? 'https://pokerom-broccolini.herokuapp.com'
      : 'http://localhost:4200'
});

module.exports = corsConfig;
