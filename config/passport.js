const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const database = require('./database');

/**
 * @summary Generate JWT Bearer.
 * @description Generate's the JSON web token (Bearer token) for authentication.
 * @param {object} passportJwt the passport-jwt plugin.
 */
const passport = (passportJwt) => {
  // setup options
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: database.secret
  };
  // jwt strategy middelware
  passportJwt.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload.data._id, (err, user) => {
      if (err) {
        return done(err, false);
      }
      return (user) ? done(null, user) : done(null, false);
    });
  }));
}

// bearer token handler
module.exports = passport;