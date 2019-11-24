const { validationResult } = require('express-validator/check');
const Rating = require('../models/Rating');
const { clearCache } = require('../middleware/cache');
const universal = require('../routes/universal');
const { checkForInvalidFields } = require('../middleware/check-validity');

const fields = ['_id', 'rating', 'message', 'date_time'];

module.exports.addRating = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const ratingData = new Rating({
      rating: req.body.rating,
      message: req.sanitize(req.body.message) || null
    });
    if (checkForInvalidFields(req, fields) === true) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    if (req.body.date_time) {
      req.body.date_time = req.sanitize(req.body.date_time.toString());
    }
    const rating = await Rating.addRating(ratingData);
    if (!rating) {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    clearCache(req);
    return res.status(201).json(rating);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res
        .status(406)
        .json({ success: false, message: 'Request body is invalid.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.getRating = async (req, res) => {
  try {
    const id = req.params.id;
    const rating = await Rating.getRating(id);
    if (!rating) {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    return res.status(200).json(rating);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.getRatings = async (req, res) => {
  try {
    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }
    const ratings = await Rating.getRatings(limit);
    return res.status(200).json(ratings);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.deleteRating = async (req, res) => {
  try {
    const id = req.params.id;
    const rating = await Rating.getRating(id);
    if (!rating) {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    const query = { _id: id };
    await Rating.deleteRating(query);
    clearCache(req);
    return res
      .status(200)
      .json({ success: true, message: 'Rating successfully deleted.' });
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.deleteRatings = async (req, res) => {
  try {
    await Rating.deleteAllRatings();
    clearCache(req);
    return res
      .status(200)
      .json({ success: true, message: 'All ratings successfully deleted.' });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.ratingsHeaders = (req, res) => {
  res.status(200);
};

module.exports.ratingHeaders = async (req, res) => {
  try {
    const id = req.params.id;
    const rating = await Rating.getRating(id);
    if (!rating) {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    return res.status(200);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.all = (req, res, next) => {
  const verbs = ['GET', 'POST', 'DELETE'];
  return universal(req, res, next, verbs);
};
