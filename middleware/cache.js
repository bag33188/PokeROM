const mcache = require('memory-cache');

function removeURIComponents(req, method, key) {
  let queryParams = [];
  let routeParams = [];
  switch (method.toUpperCase()) {
    case 'GET':
      queryParams = ['_limit', 'core', 'hacks', 'page', 'per_page'];
      routeParams = [];
      break;
    case 'POST':
    case 'PUT':
    case 'PATCH':
    case 'DELETE':
      routeParams = ['all', 'core', 'hacks', 'register'];
      queryParams = ['hacks', 'core'];
      break;
    default:
      routeParams = [];
      queryParams = [];
      break;
  }
  if (queryParams.length > 0) {
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
  }
  if (routeParams.length > 0) {
    routeParams.forEach(param => {
      if (req.originalUrl.includes(`/${param}`)) {
        key = key.replace(`/${param}`, '');
      }
    });
  }
  return key;
}

function cache(duration) {
  return (req, res, next) => {
    let key = `__express__${req.originalUrl}`;
    key = removeURIComponents(req, req.method, key);
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
  key = removeURIComponents(req, req.method, key);
  const cachedBody = mcache.get(key);
  if (cachedBody) {
    if (req.params['id']) {
      mcache.del(key.replace(`/${req.params['id']}`, ''));
    }
    mcache.del(key);
  }
}

module.exports = [cache, clearCache];
