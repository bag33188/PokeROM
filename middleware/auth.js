const passport = require('passport');

// generate authentication middleware
const auth = passport.authenticate('jwt', { session: false });

module.exports = auth;