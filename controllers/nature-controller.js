const { validationResult } = require('express-validator/check');
const Nature = require('../models/Nature');
const [, , allNaturesData] = require('../database/data.json');
const { clearCache } = require('../middleware/cache');
const universal = require('../routes/universal');
const {
  checkForInvalidRoute,
  checkForInvalidFields
} = require('../middleware/check-validity');

const routesWithParams = ['all'];
const fields = ['_id', 'name', 'up', 'down', 'flavor', 'usage'];

module.exports.getNatures = async (req, res) => {
  try {
    const natures = await Nature.getNatures();
    return res.status(200).json(natures);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.getNature = async (req, res) => {
  try {
    const id = req.params.id;
    const nature = await Nature.getNature(id);
    if (!nature) {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    return res.status(200).json(nature);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.addNature = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const natureData = new Nature({
      name: req.sanitize(req.body.name),
      up: req.sanitize(req.body.up),
      down: req.sanitize(req.body.down),
      flavor: req.sanitize(req.body.flavor) || null,
      usage: req.sanitize(req.body.usage)
    });
    if (checkForInvalidFields(req, fields) === true) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    const nature = await Nature.addNature(natureData);
    // postHeaders(req, res, nature);
    clearCache(req);
    return res.status(201).json(nature);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res
        .status(406)
        .json({ success: false, message: 'Request body is invalid.' });
    } else if (err.name === 'MongoError') {
      return res.status(406).json({
        success: false,
        message: 'Document failed database validation.'
      });
    } else {
      return res
        .status(500)
        .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.updateNature = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const natureData = {
      name: req.sanitize(req.body.name),
      up: req.sanitize(req.body.up),
      down: req.sanitize(req.body.down),
      flavor: req.sanitize(req.body.flavor) || null,
      usage: req.sanitize(req.body.usage)
    };
    if (checkForInvalidFields(req, fields) === true) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    const nature = await Nature.updateNature(id, natureData, {});
    if (!nature) {
      return res.status(404).json({
        success: false,
        message: 'Nature not found.'
      });
    }
    const updatedNature = Nature.getNature(id);
    clearCache(req);
    return res.status(200).json(updatedNature);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res
          .status(404)
          .json({ success: false, message: 'Nature not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Request body is invalid.' });
      case 'MongoError':
        return res.status(406).json({
          success: false,
          message: 'Document failed database validation.'
        });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.patchNature = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    if (checkForInvalidFields(req, fields) === true) {
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
        return res
          .status(404)
          .json({ success: false, message: 'Nature not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Body contains invalid fields.' });
      case 'MongoError':
        return res.status(406).json({
          success: false,
          message: 'Document failed database validation.'
        });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.deleteNature = async (req, res) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
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
    return res
      .status(200)
      .json({ success: true, message: 'Nature successfully deleted.' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.deleteNatures = async (req, res) => {
  try {
    await Nature.deleteAllNatures();
    clearCache(req);
    return res.status(200).json({
      success: true,
      message: 'All Natures successfully deleted!'
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.naturesHeaders = (req, res) => {
  res.status(200);
};

module.exports.natureHeaders = async (req, res) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
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
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.allNatures = async (req, res) => {
  try {
    await Nature.postAll(allNaturesData);
    const natures = await Nature.getNatures();
    return res.status(201).json(natures);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.all = (req, res, next) => {
  const verbs = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];
  return universal(req, res, next, verbs);
};
