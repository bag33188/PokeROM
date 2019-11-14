const mongoose = require('mongoose');
const url = require('url');
const moment = require('moment');
const { validationResult } = require('express-validator/check');
const Nature = require('../models/Nature');
const [, , natureData] = require('../database/data.json');
const [, clearCache] = require('../middleware/cache');

const routesWithParams = ['all'];

function getNature(id, req, res, callback) {
  return Nature.getNature(id, (err, nature) => {
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
    let id = null;
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
    await Nature.getNature(id, (err, nature) => {
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
    let id = null;
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
    await Nature.updateNature(
      id,
      updateData,
      {},
      async (err, updatedNature) => {
        try {
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
          await getNature(id, req, res, nature => {
            clearCache(req);
            return res.status(200).json(nature);
          });
        } catch (err) {
          next(err);
        }
      }
    );
  } catch (err) {
    next(err);
  }
};

module.exports.patchNature = async (req, res, next) => {
  try {
    let id = null;
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
    const data = req.body;
    const { name, up, down, flavor, usage } = data;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
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
    const query = { $set: data };
    await Nature.patchNature(id, query, async (err, status) => {
      try {
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
        await getNature(id, req, res, nature => {
          clearCache(req);
          return res.status(200).json(nature);
        });
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteNature = async (req, res, next) => {
  try {
    let id = null;
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
    await getNature(id, req, res, async () => {
      try {
        await Nature.deleteNature(id, (err, status) => {
          if (err) {
            if (err.name === 'CastError') {
              return res.status(404).json({ success: false, ...err });
            } else {
              return res.status(500).json({ success: false, ...err });
            }
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
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteNatures = async (req, res, next) => {
  try {
    await Nature.deleteAllNatures((err, status) => {
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
        message: 'All Natures successfully deleted!',
        ...status
      });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.naturesHeaders = (req, res) => {
  res.status(200);
};

module.exports.natureHeaders = async (req, res, next) => {
  try {
    let id = null;
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
    await getNature(id, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.allNatures = async (req, res, next) => {
  try {
    await Nature.postAll(natureData, async (err, natures) => {
      try {
        if (err) {
          return res.status(500).json({ success: false, ...err });
        }
        if (!natures) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
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
          clearCache(req);
          return res.status(201).json(natures);
        });
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
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
