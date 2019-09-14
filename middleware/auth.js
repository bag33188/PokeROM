const passport = require('passport');

async function auth(req, res, next) {
  try {
    return await passport.authenticate(
      'jwt',
      { session: false },
      (err, user) => {
        if (err) {
          console.log(err);
        } else if (!user) {
          return res.status(401).json({
            success: false,
            message: 'Error 401: unauthorized.'
          });
        } else {
          const key = 'user';
          req[key] = user;
          next();
        }
      }
    )(req, res, next);
  } catch (err) {
    next(err);
  }
}

module.exports = auth;
