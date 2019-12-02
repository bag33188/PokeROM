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
      // do not cache anything if request url contains query params
      // use regexp test instead of string.includes (regexp is faster)
      if (!/\?/.test(req.originalUrl)) {
        res.sendResponse = res.send;
        res.send = body => {
          mcache.put(key, body, duration * 1000);
          res.sendResponse(body);
        };
      }
      next();
    }
  };
}

function clearCache(req, routesWithParams) {
  let key = `__express__${req.originalUrl}${
    req.user ? ':' + req.user._id : ''
  }`;
  // remove all cached items on specified resource even if single item in resource is changed
  mcache.del(key);
  if (req.params['id']) {
    key = key.replace(`/${req.params['id']}`, '');
  }
  // remove extra route parameters from req url in key
  if (routesWithParams) {
    const urlArr = req.originalUrl.split('/');
    const lastIndex = urlArr.length - 1;
    if (routesWithParams.includes(urlArr[lastIndex])) {
      key = key.replace(`/${urlArr[lastIndex]}`, '');
    }
  }
  // remove all query params from req url in key
  if (/\?/.test(req.originalUrl)) {
    key = key.replace(`?${req.originalUrl.split('?').pop()}`, '');
  }

  mcache.del(key);
}

module.exports = {
  cache,
  clearCache,
  cacheControl: cacheControl({
    public: true,
    maxAge: 0
  })
};
