const url = require('url');
const moment = require('moment');
const { validationResult } = require('express-validator/check');
const Nature = require('../models/Nature');
const [, , natureData] = require('../database/data.json');
const { clearCache } = require('../middleware/cache');

const routesWithParams = ['all'];

function checkForInvalidRoute(id) {
  return routesWithParams.includes(id);
}


module.exports.getNatures = async (req, res, next) => {
  try {
    await Nature.getNatures((err, natures) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!natures) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      return res.status(200).json(natures);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getNature = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const nature = await Nature.getNature(id);
    if (!nature) {
      return res
        .status(404)
        .json({ success: false, message: 'Error 404: nature not found.' });
    }
    return res.status(200).json(nature);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.addNature = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const nature = new Nature({
      name: req.sanitize(req.body.name),
      up: req.sanitize(req.body.up),
      down: req.sanitize(req.body.down),
      flavor: req.sanitize(req.body.flavor) || null,
      usage: req.sanitize(req.body.usage)
    });
    const newNature = await Nature.addNature(nature);
    res.append(
      'Created-At-Route',
      `${url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      })}/${nature._id}`
    );
    res.append(
      'Created-At',
      moment()
        .subtract(7, 'hours')
        .format()
    );
    clearCache(req);
    return res.status(201).json(newNature);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(406).json({ success: false, ...err });
    } else {
      return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.updateNature = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const updateData = {
      name: req.sanitize(req.body.name),
      up: req.sanitize(req.body.up),
      down: req.sanitize(req.body.down),
      flavor: req.sanitize(req.body.flavor) || null,
      usage: req.sanitize(req.body.usage)
    };

    const nature = await Nature.updateNature(id, updateData, {});
    if (!nature) {
      return res.status(404).json({
        success: false,
        message: 'Error 404: nature not found.'
      });
    }
    const updatedNature = Nature.getNature(id);
    clearCache(req);
    return res.status(200).json(updatedNature);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res.status(404).json({ success: false, ...err });
      case 'ValidationError':
        return res.status(406).json({ success: false, ...err });
      default:
        return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.patchNature = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    let isValid = true;
    for (const field of Object.keys(req.body)) {
      if (!['_id', 'name', 'up', 'down', 'flavor', 'usage'].includes(field)) {
        isValid = false;
        break;
      } else {
        isValid = true;
        req.sanitize(field);
      }
    }
    if (!isValid) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    const query = { $set: req.body };
    const nature = await Nature.patchNature(id, query);
    if (!nature) {
      return res.status(404).json({
        success: false,
        message: 'Nature not found.'
      });
    }
    clearCache(req);
    const patchedNature = await Nature.getNature(id);
    return res.status(200).json(patchedNature);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res.status(404).json({ success: false, ...err });
      case 'ValidationError':
        return res.status(406).json({ success: false, ...err });
      default:
        return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.deleteNature = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const nature = await Nature.getNature(id);
    if (!nature) {
      return res.status(404).json({
        success: false,
        message: 'Nature not found.'
      });
    }
    await Nature.deleteNature(id);
    clearCache(req);
    return res.status(200).json({ success: true });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    } else {
      return res.status(500).json({ success: false, ...err });
    }
  }
};

module.exports.deleteNatures = async (req, res, next) => {
  try {
    await Nature.deleteAllNatures();
    clearCache(req);
    return res.status(200).json({
      success: true,
      message: 'All Natures successfully deleted!'
    });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.naturesHeaders = (req, res) => {
  res.status(200);
};

module.exports.natureHeaders = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(id)) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const nature = await Nature.getNature(id);
    if (!nature) {
      return res.status(404).json({
        success: false,
        message: 'Nature not found'
      });
    }
    return res.status(200);
  } catch (err) {
    next(err);
  }
};

module.exports.allNatures = async (req, res, next) => {
  try {
    await Nature.postAll(natureData);
    const natures = await Nature.getNatures();
    return res.status(201).json(natures);
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.all = (req, res) => {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];
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
