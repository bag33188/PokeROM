const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const [cache] = require('../../middleware/cache');
const RatingController = require('../../controllers/rating-controller');

const httpRouter = express.Router();

httpRouter.post(
  '/',
  [
    sanitizeBody(['rating', 'message', 'date_time'])
      .trim()
      .escape(),
    check('message')
      .optional()
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

httpRouter.get(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  cache(10),

  RatingController.getRating
);

httpRouter.get('/', auth, cache(10), RatingController.getRatings);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  RatingController.deleteRating
);

httpRouter.delete('/', auth, RatingController.deleteRatings);

httpRouter.head('/', auth, RatingController.ratingsHeaders);

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  RatingController.ratingHeaders
);

httpRouter.all('/*', RatingController.all);

module.exports = httpRouter;
