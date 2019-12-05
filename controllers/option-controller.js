const universal = require('../routes/universal');

module.exports.options = (req, res) => {
  res.status(204);
};

module.exports.all = (req, res, next) => {
  const verbs = ['OPTIONS', 'HEAD'];
  return universal(req, res, next, verbs);
};
