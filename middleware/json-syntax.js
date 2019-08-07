module.exports = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400) {
    res.status(400).json({ success: false, message: 'Invalid JSON.' });
  } else {
    next();
  }
};
