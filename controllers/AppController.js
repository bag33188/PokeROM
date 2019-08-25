const path = require('path');

module.exports.index = {
  prod: async (req, res, next) => {
    try {
      await res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
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
