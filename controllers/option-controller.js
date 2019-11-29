const url = require('url');
const universal = require('../routes/universal');

module.exports.options = (req, res) => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.pokerom.dev/'
      : 'http://localhost:4200/';
  res.cookie('base-url', url.parse(baseUrl));
  res.status(204);
};

module.exports.all = (req, res, next) => {
  const verbs = ['OPTIONS', 'HEAD'];
  return universal(req, res, next, verbs);
};
