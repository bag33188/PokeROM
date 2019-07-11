const express = require('express');
const path = require('path');
const passport = require('passport');
const logger = require('./middleware/logger');
const swaggerDoc = require('./docs/swaggerDoc');
const connectDB = require('./config/db');
const passportConfig = require('./config/passport');
const cors = require('./config/cors');
const roms = require('./routes/api/roms');
const users = require('./routes/api/users');
const version = require('./routes/api/version');
const natures = require('./routes/api/natures');
const options = require('./routes/options');
passportConfig(passport); // configure passport
var globalTunnel = require('global-tunnel');
globalTunnel.initialize({
  protocol: 'https',
  host: 'http://fixie:n7WX1zp8Hnw0x99@velodrome.usefixie.com:80',
  port:  process.env.PORT
});

// database
const db = connectDB;
db(); // connect to database

// define app from express js
const app = express();

const [apiDocs] = swaggerDoc;

// setup swagger docs
apiDocs(app);

// middleware
app.use(logger);
// define what directory to look in for serving static file(s)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // extended: true
app.use(passport.initialize());
app.use(passport.session());
app.use(cors);

// routing middleware
app.use('/options', options);
app.use('/api/roms', roms);
app.use('/api/users', users);
app.use('/api/natures', natures);
app.use('/api/version', version);

// index route
app.get('/', async (req, res, next) => {
  try {
    await res.render('index');
  } catch (err) {
    next(err);
  }
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('*', async (req, res, next) => {
    try {
      await res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    } catch (err) {
      next(err);
    }
  });
}

// port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = app;
