const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const { cache } = require('../../middleware/cache');
const RatingController = require('../../controllers/rating-controller');

const router = express.Router();

router.post(
  '/',
  [
    sanitizeBody(['rating', 'message', 'date_time'])
      .trim()
      .escape(),
    check('message')
      .optional({ nullable: true })
      .isLength({ max: 1000 })
      .withMessage('Rating message can only be 1000 characters at max.')
      .isString()
      .withMessage('Message must be a string.'),
    check('rating')
      .not()
      .isEmpty()
      .withMessage('Rating is required.')
      .isInt({ min: 1, max: 10 })
      .withMessage('Rating must be in between 1 and 10.')
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
