const mcache = require('memory-cache');

function cache(duration) {
  return (req, res, next) => {
    let key = `__express__${req.originalUrl}`;
    const queryParams = ['_limit', 'core', 'hacks', 'page', 'per_page'];
    if (Object.keys(req.query).length > 0) {
      queryParams.forEach(param => {
        if (req.query[param]) {
          key = key
            .replace(req.query[param], '')
            .replace(param, '')
            .replace('?', '')
            .replace(/&/g, '')
            .replace(/=/g, '');
        }
      });
    }
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
  let key = `__express__${req.originalUrl}`;
  const routeParams = ['all', 'core', 'hacks', 'register'];
  routeParams.forEach(param => {
    if (req.originalUrl.includes(`/${param}`)) {
      key = key.replace(`/${param}`, '');
    }
  });
  const queryParams = ['hacks', 'core'];
  if (Object.keys(req.query).length > 0) {
    queryParams.forEach(param => {
      key = key
        .replace(req.query[param], '')
        .replace(param, '')
        .replace('?', '')
        .replace(/&/g, '')
        .replace(/=/g, '');
    });
  }
  mcache.del(key);
}

module.exports = [cache, clearCache];
