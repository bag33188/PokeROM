const express = require('express');
const { sanitizeBody, sanitizeParam } = require('express-validator/filter');
const { check } = require('express-validator/check');
const auth = require('../../middleware/auth');
const [cache] = require('../../middleware/cache');
const rating_controller = require('../../controllers/RatingController');

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
  rating_controller.addRating
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

  rating_controller.getRating
);

httpRouter.get('/', auth, cache(10), rating_controller.getRatings);

httpRouter.delete(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  rating_controller.deleteRating
);

httpRouter.delete('/', auth, rating_controller.deleteRatings);

httpRouter.head('/', auth, rating_controller.ratingsHeaders);

httpRouter.head(
  '/:id',
  [
    sanitizeParam('id')
      .trim()
      .escape()
  ],
  auth,
  rating_controller.ratingHeaders
);

httpRouter.all('/*', rating_controller.all);

module.exports = httpRouter;
