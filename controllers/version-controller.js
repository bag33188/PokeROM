const xml = require('xml');
const swaggerDoc = require('../docs/swagger-doc');
const Version = require('../models/Version');

module.exports.getVersion = (req, res) => {
  const [, version] = swaggerDoc;
  if (req.headers['accept'].match(/^((?:application|text)\/xml)$/)) {
    const apiVersion = JSON.stringify(Version.getApiVersion(version));
    res.status(200).send(xml(JSON.parse(apiVersion)));
  } else {
    const apiVersion = Version.getApiVersion(version);
    res.status(200).json(apiVersion);
  }
};

module.exports.all = (req, res) => {
  const methods = ['GET', 'HEAD'];
  if (methods.includes(req.method)) {
    res.set('Allow', methods.join(', '));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
