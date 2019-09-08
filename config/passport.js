const config = require('config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const secret = config.get('secret');

function passport(passportJwt) {
  // setup options
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
  };
  // jwt strategy middelware
  passportJwt.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        await User.getUserById(jwt_payload.data._id, (err, user) => {
          if (err) {
            return done(err, false);
          }
          return user ? done(null, user) : done(null, false);
        });
      } catch (err) {
        console.log(err);
      }
    })
  );
}

// bearer token handler
module.exports = passport;
