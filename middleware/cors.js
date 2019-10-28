const cors = require('cors');

const acceptedOrigins = (origin, callback) => {
  const whitelist =
    process.env.NODE_ENV === 'production'
      ? ['https://pokerom.dev', 'https://www.pokerom.dev']
      : ['http://localhost:4200', 'http://localhost:3000'];
  if (whitelist.indexOf(origin) !== -1) {
    callback(null, true);
  } else if (!origin) {
    callback(null, whitelist[0]);
  } else {
    callback(new Error('Not allowed by CORS'), false);
  }
};

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
  origin: acceptedOrigins
});
