const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const logger = require('./middleware/logger');
const config = require('./config/db');
const roms = require('./routes/api/roms');
const users = require('./routes/api/users');
const version = require('./routes/api/version');
const swaggerDoc = require('./docs/swaggerDoc');
const natures = require('./routes/api/natures');
const options = require('./routes/options');
const passportConfig = require('./config/passport');

passportConfig(passport);

// connect to database
config.connectDB();

// define app from express js
const app = express();

// setup swagger docs
swaggerDoc.apiDocs(app);

// configure cors
const corsConfig = cors({
  origin:
    process.env.NODE_ENV === 'production'
      ? 'https://pokerom-broccolini.herokuapp.com'
      : 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
  headers: ['Accept', 'Accept-Language', 'Authorization', 'Content-Type'],
  credentials: true
});

// middleware
app.use(logger);
// define what directory to look in for serving static file(s)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // extended: true
app.use(passport.initialize());
app.use(passport.session());
app.use(corsConfig);

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
