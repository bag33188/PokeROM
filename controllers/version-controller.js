const convert = require('xml-js');
const swaggerDoc = require('../docs/swagger-doc');
const Version = require('../models/Version');

module.exports.getVersion = (req, res) => {
  const [, version] = swaggerDoc;
  const apiVersion = Version.getApiVersion(version);
  if (req.headers['accept'].match(/^((?:application|text)\/xml)$/)) {
    res.set('Content-Type', req.headers['accept']);
    res.status(200).send(
      convert.json2xml(
        JSON.stringify({
          _declaration: { _attributes: { version: '1.0', encoding: 'UTF-8' } },
          Version: apiVersion
        }),
        { compact: true, ignoreComment: true, spaces: 4 }
      )
    );
  } else {
    res.status(200).json(apiVersion);
  }
};

module.exports.all = (req, res) => {
  const methods = ['GET', 'HEAD'];
  if (methods.includes(req.method)) {
    const glue = methods.length > 1 ? ', ' : '';
    res.set('Allow', methods.join(glue));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
