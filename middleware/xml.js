const convert = require('xml-js');

function xml(req, res, status, json, collection) {
  if (req.headers['accept'].match(/^((?:application|text)\/xml)$/)) {
    res.set('Content-Type', req.headers['accept']);
    return res.status(status).send(
      convert.json2xml(
        JSON.stringify({
          _declaration: {
            _attributes: { version: '1.0', encoding: 'UTF-8' }
          },
          [collection]: {
            [collection.replace(/s$/, '')]: json
          }
        }),
        { compact: true, ignoreComment: true, spaces: 4 }
      )
    );
  } else {
    return false;
  }
}

module.exports = xml;
