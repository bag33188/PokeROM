const xml = require('xml');
const swaggerDoc = require('../../docs/swagger-doc');
const Version = require('../../models/Version');

module.exports.getVersion = async (req, res, next) => {
  try {
    const [, version] = swaggerDoc;
    if (req.headers['accept'].match(/^((?:application|text)\/xml)$/)) {
      const apiVersion = JSON.stringify(Version.getApiVersion(version));
      await res.status(200).send(xml(JSON.parse(apiVersion)));
    } else {
      const apiVersion = Version.getApiVersion(version);
      await res.status(200).json(apiVersion);
    }
  } catch (err) {
    next(err);
  }
};

module.exports.all = async (req, res, next) => {
  try {
    const methods = ['GET', 'HEAD'];
    if (methods.includes(req.method)) {
      res.set('Allow', methods.join(', '));
      return await res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    } else {
      return await res
        .status(501)
        .json({ success: false, message: 'Method not implemented.' });
    }
  } catch (err) {
    next(err);
  }
};
