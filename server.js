const express = require('express');
const php = require('node-php');
const os = require('os');
const path = require('path');
const passport = require('passport');
const dotenv = require('dotenv');
const compression = require('compression');
const helmet = require('helmet');
const cluster = require('cluster');
const expressSanitizer = require('express-sanitizer');
const { cacheControl } = require('./middleware/cache');
const logger = require('./middleware/logger');
const jsonSyntax = require('./middleware/json-syntax');
const cors = require('./middleware/cors');
const swaggerDoc = require('./docs/swagger-doc');
const connectDB = require('./config/db');
const passportConfig = require('./config/passport');
const index = require('./routes/api');
const roms = require('./routes/api/roms');
const users = require('./routes/api/users');
const version = require('./routes/api/version');
const natures = require('./routes/api/natures');
const ratings = require('./routes/api/ratings');
const options = require('./routes/options');

// setup env vars
dotenv.config({ encoding: 'utf8' });

// initialize app using express.js
const app = express();

// connect to database
connectDB({ useFindAndModify: false });

// configure passport (auth)
passportConfig(passport);

// configure api docs
const [apiDocs, apiVersion] = swaggerDoc;
if (process.env.NODE_ENV !== 'production') {
  // only show docs in dev mode
  apiDocs(app);
}

// middleware
app.use(helmet());
app.use(compression());
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
app.use('/api', index);

if (process.env.NODE_ENV === 'production') {
  if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // get number of cores in CPU
    const numCPUs = os.cpus().length;

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    // Check if work id is dead
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  }

  // Set static folder
  app.use(express.static(path.join(__dirname, 'public')));

  // index route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
} else {
  // set static folder
  app.use(php.cgi(path.join(__dirname, 'www')));

  // index route
  app.get('/', (req, res) => {
    res.redirect(`/api/docs/${apiVersion}`);
  });
}

app.all('/*', (req, res) => {
  res.status(404).json({ success: false, message: 'Error 404: not found.' });
});

// port
const PORT =
  process.env.PORT || (process.env.NODE_ENV === 'production' ? 44300 : 8080);

// start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
