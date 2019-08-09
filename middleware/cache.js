const mcache = require('memory-cache');

function cache(duration) {
  return (req, res, next) => {
    const key = `__express__${req.protocol +
      '://' +
      req.get('host') +
      req.originalUrl}`;
    const cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
}

function clearCache(req) {
  mcache.del(
    `__express__${req.protocol + '://' + req.get('host') + req.originalUrl}`
  );
}

module.exports = [cache, clearCache];
