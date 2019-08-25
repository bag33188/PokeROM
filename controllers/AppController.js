const path = require('path');
const swaggerDoc = require('../docs/swagger-doc');

const [, apiVersion] = swaggerDoc;

module.exports.index = {
  prod: async (req, res, next) => {
    try {
      await res.sendFile(
        path.resolve(
          __dirname.replace('controllers/', ''),
          'public',
          'index.html'
        )
      );
    } catch (err) {
      next(err);
    }
  },
  dev: async (req, res, next) => {
    try {
      await res.redirect(`/api/docs/${apiVersion}`);
    } catch (err) {
      next(err);
    }
  }
};

module.exports.all = async (req, res, next) => {
  try {
    await res
      .status(404)
      .json({ success: false, message: 'Error 404: not found.' });
  } catch (err) {
    next(err);
  }
};
