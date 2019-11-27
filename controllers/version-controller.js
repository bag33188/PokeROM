const convert = require('xml-js');
const swaggerDoc = require('../docs/swagger-doc');
const Version = require('../models/Version');
const universal = require('../routes/universal');

module.exports.getVersion = (req, res) => {
  const [, version] = swaggerDoc;
  const apiVersion = Version.getApiVersion(version);
  if (req.headers['accept']) {
    if (req.headers['accept'].match(/^((?:application|text)\/xml)$/)) {
      res.set('Content-Type', req.headers['accept']);
      return res.status(200).send(
        convert.json2xml(
          JSON.stringify({
            _declaration: {
              _attributes: { version: '1.0', encoding: 'UTF-8' }
            },
            Version: apiVersion
          }),
          { compact: true, ignoreComment: true, spaces: 4 }
        )
      );
    } else {
      return res.status(200).json(apiVersion);
    }
  } else {
    return res.status(200).json(apiVersion);
  }
};

module.exports.all = (req, res, next) => {
  const verbs = ['GET', 'HEAD'];
  return universal(req, res, next, verbs);
};
