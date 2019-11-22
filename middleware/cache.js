const mcache = require('memory-cache');
const cacheControl = require('express-cache-controller');

function cache(duration) {
  return (req, res, next) => {
    const key = `__express__${req.originalUrl}${
      req.user ? ':' + req.user._id : ''
    }`;
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
  const key = `__express__${req.originalUrl}${
    req.user ? ':' + req.user._id : ''
  }`;
  const cachedBody = mcache.get(key);
  if (cachedBody) {
    // remove all cached roms even if single rom is changed
    if (req.params['id']) {
      mcache.del(key.replace(`/${req.params['id']}`, ''));
      if (key.includes('/api/roms')) {
        mcache.del(key);
      }
    }
    mcache.del(key);
  }
}

module.exports = {
  cache,
  clearCache,
  cacheControl: cacheControl({
    public: true,
    maxAge: 0
  })
};
