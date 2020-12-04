const express = require('express');
const { body, param, check } = require('express-validator');
const { cache } = require('../../middleware/cache');
const NatureController = require('../../controllers/nature-controller');
const natureValidator = require('../../validation/nature-validator');

const router = express.Router();

const fieldsToSanitize = ['name', 'up', 'down', 'flavor', 'usage'];

router.get('/', cache(20), NatureController.getNatures);

router.get(
  '/:id',
  cache(20),
  [
    param('id')
      .trim()
      .escape()
  ],
  NatureController.getNature
);

router.post(
  '/',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    check('name')
      .not()
      .isEmpty()
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({
        min: natureValidator.name[0],
        max: natureValidator.name[1]
      })
      .withMessage(
        `The name of the nature must be between ${
          natureValidator.name[0]
        } and ${natureValidator.name[1]} characters.`
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: natureValidator.up[0], max: natureValidator.up[1] })
      .withMessage(
        `The increased stat of the nature must be between ${
          natureValidator.up[0]
        } and ${natureValidator.up[1]} characters.`
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({
        min: natureValidator.down[0],
        max: natureValidator.down[1]
      })
      .withMessage(
        `The decreased stat of the nature must be between ${
          natureValidator.down[0]
        } and ${natureValidator.down[1]} characters.`
      ),
    check('flavor')
      .optional({ nullable: true })
      .isLength({
        min: natureValidator.flavor[0],
        max: natureValidator.flavor[1]
      })
      .withMessage(
        `The flavor of the nature must be between ${
          natureValidator.flavor[0]
        } and ${natureValidator.flavor[1]} characters.`
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
        min: natureValidator.usage[0],
        max: natureValidator.usage[1]
      })
      .withMessage(
        `The usage for the nature must be in between ${
          natureValidator.usage[0]
        } and ${natureValidator.usage[1]} characters.`
      )
  ],
  NatureController.addNature
);

router.put(
  '/:id',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    param('id')
      .trim()
      .escape(),
    check('name')
      .not()
      .isEmpty()
      .withMessage('The name of the nature is required.')
      .isString()
      .withMessage('Name must be a string.')
      .isLength({
        min: natureValidator.name[0],
        max: natureValidator.name[1]
      })
      .withMessage(
        `The name of the nature must be between ${
          natureValidator.name[0]
        } and ${natureValidator.name[1]} characters.`
      ),
    check('up')
      .not()
      .isEmpty()
      .withMessage('The increased stat of the nature is required.')
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: natureValidator.up[0], max: natureValidator.up[1] })
      .withMessage(
        `The increased stat of the nature must be between ${
          natureValidator.up[0]
        } and ${natureValidator.up[1]} characters.`
      ),
    check('down')
      .not()
      .isEmpty()
      .withMessage('The decreased stat of the nature is required.')
      .isString()
      .withMessage('Down must be a string.')
      .isLength({
        min: natureValidator.down[0],
        max: natureValidator.down[1]
      })
      .withMessage(
        `The decreased stat of the nature must be between ${
          natureValidator.down[0]
        } and ${natureValidator.down[1]} characters.`
      ),
    check('flavor')
      .optional({ nullable: true })
      .isLength({
        min: natureValidator.flavor[0],
        max: natureValidator.flavor[1]
      })
      .withMessage(
        `The flavor of the nature must be between ${
          natureValidator.flavor[0]
        } and ${natureValidator.flavor[1]} characters.`
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
        min: natureValidator.usage[0],
        max: natureValidator.usage[1]
      })
      .withMessage(
        `The usage for the nature must be in between ${
          natureValidator.usage[0]
        } and ${natureValidator.usage[1]} characters.`
      )
  ],
  NatureController.updateNature
);

router.patch(
  '/:id',
  [
    body(fieldsToSanitize)
      .trim()
      .escape(),
    param('id')
      .trim()
      .escape(),
    check('name')
      .optional({ nullable: false })
      .isString()
      .withMessage('Name must be a string.')
      .isLength({
        min: natureValidator.name[0],
        max: natureValidator.name[1]
      })
      .withMessage(
        `The name of the nature must be between ${
          natureValidator.name[0]
        } and ${natureValidator.name[1]} characters.`
      ),
    check('up')
      .optional({ nullable: false })
      .isString()
      .withMessage('Up must be a string.')
      .isLength({ min: natureValidator.up[0], max: natureValidator.up[1] })
      .withMessage(
        `The increased stat of the nature must be between ${
          natureValidator.up[0]
        } and ${natureValidator.up[1]} characters.`
      ),
    check('down')
      .optional({ nullable: false })
      .isString()
      .withMessage('Down must be a string.')
      .isLength({
        min: natureValidator.down[0],
        max: natureValidator.down[1]
      })
      .withMessage(
        `The decreased stat of the nature must be between ${
          natureValidator.down[0]
        } and ${natureValidator.down[1]} characters.`
      ),
    check('flavor')
      .optional({ nullable: true })
      .isLength({
        min: natureValidator.flavor[0],
        max: natureValidator.flavor[1]
      })
      .withMessage(
        `The flavor of the nature must be between ${
          natureValidator.flavor[0]
        } and ${natureValidator.flavor[1]} characters.`
      )
      .isString()
      .withMessage('Flavor must be a string.'),
    check('usage')
      .optional({ nullable: false })
      .isString()
      .withMessage('Usage must be a string.')
      .isLength({
        min: natureValidator.usage[0],
        max: natureValidator.usage[1]
      })
      .withMessage(
        `The usage for the nature must be in between ${
          natureValidator.usage[0]
        } and ${natureValidator.usage[1]} characters.`
      )
  ],
  NatureController.patchNature
);

router.delete(
  '/:id',
  [
    param('id')
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
    param('id')
      .trim()
      .escape()
  ],
  NatureController.natureHeaders
);

router.post('/all', NatureController.allNatures);

router.all('/*', NatureController.all);

module.exports = router;
