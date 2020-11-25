const cors = require('cors');

const devLst = ['http://localhost:4200', 'http://localhost:8080', 'http://localhost:8081'];

const prodLst = ['https://pokerom.dev', 'https://www.pokerom.dev'];

const whitelist = process.env.NODE_ENV === 'production' ? prodLst : devLst;

const acceptedOrigins = (origin, callback) => {
  whitelist.indexOf(origin) > -1
    ? callback(null, true)
    : !origin
    ? callback(null, Array.isArray(whitelist) ? whitelist[0] : whitelist)
    : callback(new Error('Not allowed by CORS'), false);
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
