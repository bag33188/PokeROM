const mcache = require('memory-cache');

function cache(duration) {
  return (req, res, next) => {
    const key = `__express__${req.originUrl || req.url}`;
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
  mcache.delete(`__express__${req.originUrl || req.url}`);
}

module.exports = [cache, clearCache];
