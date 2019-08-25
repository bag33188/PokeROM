const mongoose = require('mongoose');
const url = require('url');
const moment = require('moment');
const { validationResult } = require('express-validator/check');
const Nature = require('../models/Nature');
const natureData = require('../database/data.json')[2];
const [, clearCache] = require('../middleware/cache');

const fieldsToSanitize = ['name', 'up', 'down', 'flavor', 'usage'];
const routesWithParams = ['all'];

function getNature(query, req, res, callback) {
  return Nature.getNature(query, (err, nature) => {
    if (err) {
      if (err.name === 'CastError') {
        return res.status(404).json({ success: false, ...err });
      } else {
        return res.status(500).json({ success: false, ...err });
      }
    }
    if (!nature) {
      return res
        .status(404)
        .json({ success: false, message: 'Error 404: nature not found.' });
    }
    return callback(nature);
  });
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
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    await Nature.getNature({ _id: id }, (err, nature) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        } else {
          return res.status(500).json({ success: false, ...err });
        }
      }
      if (!nature) {
        return res
          .status(404)
          .json({ success: false, message: 'Error 404: nature not found.' });
      }
      return res.status(200).json(nature);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.addNature = async (req, res, next) => {
  try {
    const nature = new Nature({
      name: req.sanitize(req.body.name),
      up: req.sanitize(req.body.up),
      down: req.sanitize(req.body.down),
      flavor: req.sanitize(req.body.flavor) || null,
      usage: req.sanitize(req.body.usage)
    });
    const { name, up, down, flavor, usage } = nature;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    await Nature.addNature(nature, (err, nature) => {
      if (err) {
        if (err.name === 'ValidationError') {
          return res.status(406).json({ success: false, ...err });
        } else {
          return res.status(500).json({ success: false, ...err });
        }
      }
      if (!nature) {
        return res.status(500).json({
          success: false
        });
      }
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
      return res.status(201).json(nature);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.updateNature = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    const updateData = {
      name: req.sanitize(req.body.name),
      up: req.sanitize(req.body.up),
      down: req.sanitize(req.body.down),
      flavor: req.sanitize(req.body.flavor) || null,
      usage: req.sanitize(req.body.usage)
    };
    const { name, up, down, flavor, usage } = updateData;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    await Nature.updateNature(
      { _id: id },
      updateData,
      {},
      (err, updatedNature) => {
        if (err) {
          switch (err.name) {
            case 'CastError':
              return res.status(404).json({ success: false, ...err });
            case 'ValidationError':
              return res.status(406).json({ success: false, ...err });
            default:
              return res.status(500).json({ success: false, ...err });
          }
        }
        if (!updatedNature) {
          return res.status(404).json({
            success: false,
            message: 'Error 404: nature not found.'
          });
        }
        getNature({ _id: id }, req, res, nature => {
          clearCache(req);
          return res.status(200).json(nature);
        });
      }
    );
  } catch (err) {
    next(err);
  }
};

module.exports.patchNature = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    const query = req.body;
    let isValid = true;
    for (const field of Object.keys(req.body)) {
      if (!fieldsToSanitize.includes(field)) {
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
    await Nature.patchNature({ _id: id }, { $set: query }, (err, status) => {
      if (err) {
        switch (err.name) {
          case 'CastError':
            return res.status(404).json({ success: false, ...err });
          case 'ValidationError':
            return res.status(406).json({ success: false, ...err });
          default:
            return res.status(500).json({ success: false, ...err });
        }
      }
      if (!status) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      getNature({ _id: id }, req, res, nature => {
        clearCache(req);
        return res.status(200).json(nature);
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteNature = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    getNature({ _id: id }, req, res, () => {
      Nature.deleteNature({ _id: id }, (err, status) => {
        if (err) {
          if (err.name === 'CastError') {
            return res.status(404).json({ success: false, ...err });
          }
          return res.status(500).json({ success: false, ...err });
        }
        if (!status) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
        clearCache(req);
        return res.status(200).json({ success: true, ...status });
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteNatures = async (req, res, next) => {
  try {
    Nature.deleteAllNatures((err, status) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!status) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      clearCache(req);
      return res.status(200).json({
        success: true,
        message: 'All Natures successfuly deleted!',
        ...status
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.naturesHeaders = async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
};

module.exports.natureHeaders = async (req, res, next) => {
  try {
    let id;
    try {
      if (routesWithParams.includes(req.params.id)) {
        return res
          .status(405)
          .json({ success: false, message: 'Method not allowed.' });
      }
      id = mongoose.Types.ObjectId(req.params.id);
    } catch (e) {
      return res
        .status(404)
        .json({ success: false, message: 'Nature not found.' });
    }
    await getNature({ _id: id }, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.allNatures = async (req, res, next) => {
  try {
    await Nature.postAll(natureData, (err, natures) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!natures) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      Nature.getNatures((err, natures) => {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        if (!natures) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
        clearCache(req);
        return res.status(201).json(natures);
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.all = async (req, res, next) => {
  try {
    const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'];
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
