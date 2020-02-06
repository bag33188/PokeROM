const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const { cache } = require('../../middleware/cache');
const RatingController = require('../../controllers/rating-controller');
const ratingsValidator = require('../../validation/rating-validator');

const router = express.Router();

router.post(
  '/',
  [
    sanitizeBody(['rating', 'message', 'date_time'])
      .trim()
      .escape(),
    check('message')
      .optional({ nullable: true })
      .isLength({ max: ratingsValidator.message[1] })
      .withMessage(
        `Rating message can only be ${
          ratingsValidator.message[1]
        } characters at max.`
      )
      .isString()
      .withMessage('Message must be a string.'),
    check('rating')
      .not()
      .isEmpty()
      .withMessage('Rating is required.')
      .isInt({
        min: ratingsValidator.rating[0],
        max: ratingsValidator.rating[1]
      })
      .withMessage(
        `Rating must be in between ${ratingsValidator.rating[0]} and ${
          ratingsValidator.rating[1]
        }.`
      )
  ],
  RatingController.addRating
);

router.get(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  cache(20),
  RatingController.getRating
);

router.get('/', auth, cache(20), RatingController.getRatings);

router.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  RatingController.deleteRating
);

router.delete('/', auth, RatingController.deleteRatings);

router.head('/', auth, RatingController.ratingsHeaders);

router.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  RatingController.ratingHeaders
);

router.all('/*', RatingController.all);

module.exports = router;
