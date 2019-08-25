const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const ValidatePatchRequest = require('../../middleware/validate-patch-request');
const [cache] = require('../../middleware/cache');
const nature_controller = require('../../controllers/NatureController');

const httpRouter = express.Router();

const fieldsToSanitize = ['name', 'up', 'down', 'flavor', 'usage'];

httpRouter.get('/', cache(10), nature_controller.getNatures);

httpRouter.get(
  '/:id',
  cache(10),
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  nature_controller.getNature
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
  nature_controller.addNature
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
  nature_controller.updateNature
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
  ValidatePatchRequest.validateNaturePatch,
  nature_controller.patchNature
);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  nature_controller.deleteNature
);

httpRouter.delete('/', nature_controller.deleteNatures);

httpRouter.head('/', nature_controller.naturesHeaders);

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  nature_controller.natureHeaders
);

httpRouter.post('/all', nature_controller.allNatures);

httpRouter.all('/*', nature_controller.all);

module.exports = httpRouter;
