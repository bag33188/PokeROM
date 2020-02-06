const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const { cache } = require('../../middleware/cache');
const NatureController = require('../../controllers/nature-controller');
const naturesValidator = require('../../validation/natures-validator');

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
      .isLength({
        min: naturesValidator.name[0],
        max: naturesValidator.name[1]
      })
      .withMessage(
        `The name of the nature must be between ${
          naturesValidator.name[0]
        } and ${naturesValidator.name[1]} characters.`
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: naturesValidator.up[0], max: naturesValidator.up[1] })
      .withMessage(
        `The increased stat of the nature must be between ${
          naturesValidator.up[0]
        } and ${naturesValidator.up[1]} characters.`
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({
        min: naturesValidator.down[0],
        max: naturesValidator.down[1]
      })
      .withMessage(
        `The decreased stat of the nature must be between ${
          naturesValidator.down[0]
        } and ${naturesValidator.down[1]} characters.`
      ),
    check('flavor')
      .optional({ nullable: true })
      .isLength({
        min: naturesValidator.flavor[0],
        max: naturesValidator.flavor[1]
      })
      .withMessage(
        `The flavor of the nature must be between ${
          naturesValidator.flavor[0]
        } and ${naturesValidator.flavor[1]} characters.`
      )
      .isString()
      .withMessage('Flavor must be a string.'),
    check('usage')
      .not()
      .isEmpty()
      .withMessage('he usage for the nature is required')
      .isString()
      .withMessage('Usage must be a string.')
      .isLength({
        min: naturesValidator.usage[0],
        max: naturesValidator.usage[1]
      })
      .withMessage(
        `The usage for the nature must be in between ${
          naturesValidator.usage[0]
        } and ${naturesValidator.usage[1]} characters.`
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
      .isLength({
        min: naturesValidator.name[0],
        max: naturesValidator.name[1]
      })
      .withMessage(
        `The name of the nature must be between ${
          naturesValidator.name[0]
        } and ${naturesValidator.name[1]} characters.`
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: naturesValidator.up[0], max: naturesValidator.up[1] })
      .withMessage(
        `The increased stat of the nature must be between ${
          naturesValidator.up[0]
        } and ${naturesValidator.up[1]} characters.`
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({
        min: naturesValidator.down[0],
        max: naturesValidator.down[1]
      })
      .withMessage(
        `The decreased stat of the nature must be between ${
          naturesValidator.down[0]
        } and ${naturesValidator.down[1]} characters.`
      ),
    check('flavor')
      .optional({ nullable: true })
      .isLength({
        min: naturesValidator.flavor[0],
        max: naturesValidator.flavor[1]
      })
      .withMessage(
        `The flavor of the nature must be between ${
          naturesValidator.flavor[0]
        } and ${naturesValidator.flavor[1]} characters.`
      )
      .isString()
      .withMessage('Flavor must be a string.'),
    check('usage')
      .not()
      .isEmpty()
      .withMessage('he usage for the nature is required')
      .isString()
      .withMessage('Usage must be a string.')
      .isLength({
        min: naturesValidator.usage[0],
        max: naturesValidator.usage[1]
      })
      .withMessage(
        `The usage for the nature must be in between ${
          naturesValidator.usage[0]
        } and ${naturesValidator.usage[1]} characters.`
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
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({
        min: naturesValidator.name[0],
        max: naturesValidator.name[1]
      })
      .withMessage(
        `The name of the nature must be between ${
          naturesValidator.name[0]
        } and ${naturesValidator.name[1]} characters.`
      ),
    check('up')
      .optional()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: naturesValidator.up[0], max: naturesValidator.up[1] })
      .withMessage(
        `The increased stat of the nature must be between ${
          naturesValidator.up[0]
        } and ${naturesValidator.up[1]} characters.`
      ),
    check('down')
      .optional()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({
        min: naturesValidator.down[0],
        max: naturesValidator.down[1]
      })
      .withMessage(
        `The decreased stat of the nature must be between ${
          naturesValidator.down[0]
        } and ${naturesValidator.down[1]} characters.`
      ),
    check('flavor')
      .optional({ nullable: true })
      .isLength({
        min: naturesValidator.flavor[0],
        max: naturesValidator.flavor[1]
      })
      .withMessage(
        `The flavor of the nature must be between ${
          naturesValidator.flavor[0]
        } and ${naturesValidator.flavor[1]} characters.`
      )
      .isString()
      .withMessage('Flavor must be a string.'),
    check('usage')
      .optional()
      .withMessage('he usage for the nature is required')
      .isString()
      .withMessage('Usage must be a string.')
      .isLength({
        min: naturesValidator.usage[0],
        max: naturesValidator.usage[1]
      })
      .withMessage(
        `The usage for the nature must be in between ${
          naturesValidator.usage[0]
        } and ${naturesValidator.usage[1]} characters.`
      )
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
