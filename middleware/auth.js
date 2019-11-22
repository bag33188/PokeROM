const passport = require('passport');

/**
 * @function
 * @async
 * @name auth
 * @summary Authenticate
 * @description Authorizes a user.
 * @param req The request.
 * @param res The response.
 * @param next The function to call the next piece of middleware.
 * @returns {Promise<void>} The authentication promise.
 */
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
            message: 'Unauthorized.'
          });
        } else {
          req.user = user;
          next();
        }
      }
    )(req, res, next);
  } catch (err) {
    next(err);
  }
}

module.exports = auth;
