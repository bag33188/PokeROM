const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const { cache } = require('../../middleware/cache');
const NatureController = require('../../controllers/nature-controller');

const router = express.Router();

const fieldsToSanitize = ['name', 'up', 'down', 'flavor', 'usage'];

router.get('/', cache(20), NatureController.getNatures);

router.get(
  '/:id',
  cache(20),
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  NatureController.getNature
);

router.post(
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
      .optional({ nullable: true })
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
      .isLength({ min: 4, max: 40 })
      .withMessage(
        'The usage for the nature must be in between 4 and 40 characters.'
      )
  ],
  NatureController.addNature
);

router.put(
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
      .optional({ nullable: true })
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
      .isLength({ min: 4, max: 40 })
      .withMessage(
        'The usage for the nature must be in between 4 and 40 characters.'
      )
  ],
  NatureController.updateNature
);

router.patch(
  '/:id',
  [
    sanitizeBody(fieldsToSanitize)
      .trim()
      .escape(),
    sanitizeParam('id')
      .trim()
      .escape(),
    check('name')
      .optional()
      .isLength({ min: 3, max: 20 })
      .withMessage('Name must be between 3 and 20 characters.')
      .isString(),
    check('up')
      .optional()
      .isLength({ min: 4, max: 20 })
      .withMessage('Up must be between 4 and 20 characters.')
      .isString(),
    check('down')
      .optional()
      .isLength({ min: 4, max: 20 })
      .withMessage('Down must be between 4 and 20 characters.')
      .isString(),
    check('flavor')
      .optional({ nullable: true })
      .isLength({ min: 4, max: 14 })
      .withMessage('Flavor must be between 4 and 14 characters.')
      .isString(),
    check('usage')
      .optional()
      .isLength({ min: 4, max: 40 })
      .withMessage('Usage must be between 4 and 40 characters.')
      .isString()
  ],
  NatureController.patchNature
);

router.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  NatureController.deleteNature
);

router.delete('/', NatureController.deleteNatures);

router.head('/', NatureController.naturesHeaders);

router.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  NatureController.natureHeaders
);

router.post('/all', NatureController.allNatures);

router.all('/*', NatureController.all);

module.exports = router;
