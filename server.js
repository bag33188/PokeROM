const express = require('express');
const path = require('path');
const passport = require('passport');
const expressSanitizer = require('express-sanitizer');
const [, , cacheControl] = require('./middleware/cache');
const logger = require('./middleware/logger');
const jsonSyntax = require('./middleware/json-syntax');
const swaggerDoc = require('./docs/swagger-doc');
const connectDB = require('./config/db');
const cors = require('./config/cors');
const roms = require('./routes/api/roms');
const users = require('./routes/api/users');
const version = require('./routes/api/version');
const natures = require('./routes/api/natures');
const ratings = require('./routes/api/ratings');
const options = require('./routes/options');

// configure passport
require('./config/passport')(passport);

// connect to database
connectDB();

// define app from express js
const app = express();

// setup swagger docs
const [apiDocs, apiVersion] = swaggerDoc;
apiDocs(app);

// middleware
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // extended: true
app.use(jsonSyntax);
app.use(cacheControl);
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSanitizer());
app.use(cors);

// routing middleware
app.use('/options', options);
app.use('/api/ratings', ratings);
app.use('/api/roms', roms);
app.use('/api/users', users);
app.use('/api/natures', natures);
app.use('/api/version', version);

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
} else {
  // index route
  app.get('/', async (req, res, next) => {
    try {
      await res.redirect(`/api/docs/${apiVersion}`);
    } catch (err) {
      next(err);
    }
  });
}

app.all('/*', async (req, res, next) => {
  try {
    const methods = ['GET', 'OPTIONS'];
    if (methods.includes(req.method)) {
      res.set('Allow', methods.join(', '));
      return await res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    } else {
      return await res
        .status(501)
        .json({ success: false, message: 'Method not implemented.' });
    }
  } catch (err) {
    next(err);
  }
});

// port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// module.exports = app;
