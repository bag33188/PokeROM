const express = require('express');
const mongoose = require('mongoose');
const url = require('url');
const moment = require('moment');
const {sanitizeBody} = require('express-validator/filter');
const {check, validationResult} = require('express-validator/check');
const Nature = require('../../models/Nature');
const natureData = require('../../database/data.json')[2];
const ValidatePatchRequest = require('../../middleware/ValidatePatchRequest');

const httpRouter = express.Router();

const fieldsToSanitize = ['name', 'up', 'down', 'flavor', 'usage'];

function getNature(query, req, res, callback) {
  return Nature.getNature(query, (err, nature) => {
    if (err) {
      if (err.name === 'CastError') {
        return res.status(404).json({success: false, ...err});
      } else {
        return res.status(500).json({success: false, ...err});
      }
    }
    if (!nature) {
      return res
        .status(404)
        .json({success: false, message: 'Error 404: nature not found.'});
    }
    return callback(nature);
  });
}

/**
 * @summary Get all Natures.
 * @description Gets all Natures in the database.
 */
httpRouter.get('/',  async (req, res, next) => {
  try {
    await Nature.getNatures((err, natures) => {
      if (err) {
        return res.status(500).json({success: false, ...err});
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

/**
 * @summary Get single nature.
 * @description Gets a single nature from the database.
 * @param {string} id The id of the nature to get.
 */
httpRouter.get('/:id',  async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'Nature not found.'});
    }
    await Nature.getNature({_id: id}, (err, nature) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({success: false, ...err});
        } else {
          return res.status(500).json({success: false, ...err});
        }
      }
      if (!nature) {
        return res
          .status(404)
          .json({success: false, message: 'Error 404: nature not found.'});
      }
      return res.status(200).json(nature);
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Add Nature
 * @description Adds a nature to the database.
 * @param {Nature} newNature The new nature to add to the database.
 */
httpRouter.post(
  '/',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .unescape().unescape().escape(),
    check('name')
      .not()
      .isEmpty()
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({min: 3, max: 20})
      .withMessage(
        'The name of the nature must be between 3 and 10 characters.'
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({min: 4, max: 20})
      .withMessage(
        'The increased stat of the nature must be between 4 and 20 characters.'
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({min: 4, max: 20})
      .withMessage(
        'The decreased stat of the nature must be between 4 and 20 characters.'
      ),
    check('flavor')
      .optional()
      .isLength({min: 4, max: 14})
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
      .isLength({min: 5, max: 40})
      .withMessage(
        'The usage for the nature must be in between 5 and 40 characters.'
      )
  ],
  async (req, res, next) => {
    try {
      const nature = new Nature({
        name: req.body.name,
        up: req.body.up,
        down: req.body.down,
        flavor: req.body.flavor,
        usage: req.body.usage
      });
      const {name, up, down, flavor, usage} = nature;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      await Nature.addNature(nature, (err, nature) => {
        if (err) {
          if (err.name === 'ValidationError') {
            return res.status(406).json({success: false, ...err});
          } else {
            return res.status(500).json({success: false, ...err});
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
        res.append('Created-At', moment().format());
        return res.status(201).json(nature);
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Update Nature
 * @description Updates a nature in the database.
 * @param {string} id The id of the nature to update.
 * @param {Nature} natureData The nature data to update with.
 */
httpRouter.put(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .unescape().unescape().escape(),
    check('name')
      .not()
      .isEmpty()
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({min: 3, max: 20})
      .withMessage(
        'The name of the nature must be between 3 and 10 characters.'
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({min: 4, max: 20})
      .withMessage(
        'The increased stat of the nature must be between 4 and 20 characters.'
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({min: 4, max: 20})
      .withMessage(
        'The decreased stat of the nature must be between 4 and 20 characters.'
      ),
    check('flavor')
      .optional()
      .isLength({min: 4, max: 14})
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
      .isLength({min: 5, max: 40})
      .withMessage(
        'The usage for the nature must be in between 5 and 40 characters.'
      )
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
        return res.status(404).json({success: false, message: 'Nature not found.'});
      }
      const updateData = {
        name: req.body.name,
        up: req.body.up,
        down: req.body.down,
        flavor: req.body.flavor,
        usage: req.body.usage
      };
      const {name, up, down, flavor, usage} = updateData;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(406).json({success: false, errors: errors.array()});
      }
      await Nature.updateNature(
        {_id: id},
        updateData,
        {},
        (err, updatedNature) => {
          if (err) {
            switch (err.name) {
              case 'CastError':
                return res.status(404).json({success: false, ...err});
              case 'ValidationError':
                return res.status(406).json({success: false, ...err});
              default:
                return res.status(500).json({success: false, ...err});
            }
          }
          if (!updatedNature) {
            return res.status(404).json({
              success: false,
              message: 'Error 404: nature not found.'
            });
          }
          getNature({_id: id}, req, res, nature => {
            return res.status(200).json(nature);
          });
        }
      );
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Patch Nature.
 * @description Partially updates a nature in the database.
 * @param {object} partialNature The partial data to update with.
 * @param {string} id The id of the nature to patch/partially update.
 */
httpRouter.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .unescape().unescape().escape()
  ],
  async (req, res, next) => {
    try {
      let id;
      try {
        id = mongoose.Types.ObjectId(req.params.id);
      } catch {
        return res.status(404).json({success: false, message: 'Nature not found.'});
      }
      const query = req.body;
      let isValid = true;
      for (const field of Object.keys(req.body)) {
        if (
          field !== 'name' &&
          field !== 'up' &&
          field !== 'down' &&
          field !== 'flavor' &&
          field !== 'usage'
        ) {
          isValid = false;
          break;
        } else {
          isValid = true;
        }
      }
      if (!isValid) {
        return res
          .status(406)
          .json({success: false, message: 'Data not valid.'});
      }
      if (new ValidatePatchRequest(req).validateNaturePatch(res)) {
        return;
      }
      await Nature.patchNature({_id: id}, {$set: query}, (err, status) => {
        if (err) {
          switch (err.name) {
            case 'CastError':
              return res.status(404).json({success: false, ...err});
            case 'ValidationError':
              return res.status(406).json({success: false, ...err});
            default:
              return res.status(500).json({success: false, ...err});
          }
        }
        if (!status) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
        getNature({_id: id}, req, res, nature => {
          return res.status(200).json(nature);
        });
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * @summary Delete Nature
 * @description Deletes a single nature from the database.
 * @param {string} id The id of the nature to delete.
 */
httpRouter.delete('/:id', async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'Nature not found.'});
    }
    getNature({_id: id}, req, res, () => {
      Nature.deleteNature({_id: id}, (err, status) => {
        if (err) {
          if (err.name === 'CastError') {
            return res.status(404).json({success: false, ...err});
          }
          return res.status(500).json({success: false, ...err});
        }
        if (!status) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
        return res.status(200).json({success: true, ...status});
      });
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Delete All Natures
 * @description Deletes all natures in the database.
 */
httpRouter.delete('/', async (req, res, next) => {
  try {
    Nature.deleteAllNatures((err, status) => {
      if (err) {
        return res.status(500).json({success: false, ...err});
      }
      if (!status) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
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

/**
 * @summary Get Head Info.
 * @description Get's header info for entire /api/natures route.
 */
httpRouter.head('/', async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Get Single Head Info.
 * @description Get's specific head info for /api/natures/:id route.
 */
httpRouter.head('/:id', async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'Nature not found.'});
    }
    await getNature({_id: id}, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
});

/**
 * @summary Add All Natures
 * @description Adds all natures to the database.
 */
httpRouter.post('/all', async (req, res, next) => {
  try {
    await Nature.postAll(natureData, (err, natures) => {
      if (err) {
        return res.status(500).json({success: false, ...err});
      }
      if (!natures) {
        return res.status(502).json({
          success: false,
          message: 'Bad gateway.'
        });
      }
      Nature.getNatures((err, natures) => {
        if (err) {
          return res.status(500).json({success: false, ...err});
        }
        if (!natures) {
          return res.status(502).json({
            success: false,
            message: 'Bad gateway.'
          });
        }
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
      return await res.status(405).json({success: false, message: 'Method not allowed.'});
    } else {
      return await res.status(501).json({success: false, message: 'Method not implemented.'});
    }
  } catch (err) {
    next(err);
  }
});

module.exports = httpRouter;
