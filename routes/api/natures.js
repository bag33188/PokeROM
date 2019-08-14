const express = require('express');
const mongoose = require('mongoose');
const url = require('url');
const moment = require('moment');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check, validationResult } = require('express-validator/check');
const Nature = require('../../models/Nature');
const natureData = require('../../database/data.json')[2];
const ValidatePatchRequest = require('../../middleware/validate-patch-request');
const [cache, clearCache] = require('../../middleware/cache');

const httpRouter = express.Router();

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

httpRouter.get('/', cache(10), async (req, res, next) => {
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
});

httpRouter.get(
  '/:id',
  cache(10),
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        if (routesWithParams.includes(req.params.id)) {
          return res
            .status(405)
            .json({ success: false, message: 'Method not allowed.' });
        }
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
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
  }
);

httpRouter.post(
  '/',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .not()
      .isEmpty()
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({ min: 3, max: 20 })
      .withMessage(
        'The name of the nature must be between 3 and 10 characters.'
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'The increased stat of the nature must be between 4 and 20 characters.'
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'The decreased stat of the nature must be between 4 and 20 characters.'
      ),
    check('flavor')
      .optional()
      .isLength({ min: 4, max: 14 })
      .withMessage(
        'The flavor of the nature must be between 4 and 14 characters.'
      )
      .isString()
      .withMessage('Flavor must be a string.'),
    check('usage')
      .not()
      .isEmpty()
      .withMessage('he usage for the nature is required')
      .isString()
      .withMessage('Usage must be a string.')
      .isLength({ min: 5, max: 40 })
      .withMessage(
        'The usage for the nature must be in between 5 and 40 characters.'
      )
  ],
  async (req, res, next) => {
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
  }
);

httpRouter.put(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape(),
    check('name')
      .not()
      .isEmpty()
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({ min: 3, max: 20 })
      .withMessage(
        'The name of the nature must be between 3 and 10 characters.'
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'The increased stat of the nature must be between 4 and 20 characters.'
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({ min: 4, max: 20 })
      .withMessage(
        'The decreased stat of the nature must be between 4 and 20 characters.'
      ),
    check('flavor')
      .optional()
      .isLength({ min: 4, max: 14 })
      .withMessage(
        'The flavor of the nature must be between 4 and 14 characters.'
      )
      .isString()
      .withMessage('Flavor must be a string.'),
    check('usage')
      .not()
      .isEmpty()
      .withMessage('The usage for the nature is required.')
      .isString()
      .withMessage('Usage must be a string.')
      .isLength({ min: 5, max: 40 })
      .withMessage(
        'The usage for the nature must be in between 5 and 40 characters.'
      )
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        if (routesWithParams.includes(req.params.id)) {
          return res
            .status(405)
            .json({ success: false, message: 'Method not allowed.' });
        }
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
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
  }
);

httpRouter.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        if (routesWithParams.includes(req.params.id)) {
          return res
            .status(405)
            .json({ success: false, message: 'Method not allowed.' });
        }
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
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
      if (new ValidatePatchRequest(req).validateNaturePatch(res)) {
        return;
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
  }
);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        if (routesWithParams.includes(req.params.id)) {
          return res
            .status(405)
            .json({ success: false, message: 'Method not allowed.' });
        }
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
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
  }
);

httpRouter.delete('/', async (req, res, next) => {
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
});

httpRouter.head('/', async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        if (routesWithParams.includes(req.params.id)) {
          return res
            .status(405)
            .json({ success: false, message: 'Method not allowed.' });
        }
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
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
  }
);

httpRouter.post('/all', async (req, res, next) => {
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
});

httpRouter.all('/*', async (req, res, next) => {
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
});

module.exports = httpRouter;
