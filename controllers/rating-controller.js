const { validationResult } = require('express-validator/check');
const url = require('url');
const moment = require('moment');
const Rating = require('../models/Rating');
const { clearCache } = require('../middleware/cache');

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
    if (req.body.date_time) {
      req.body.date_time = req.sanitize(req.body.date_time.toString());
    }
    const rating = await Rating.addRating(ratingData);
    if (!rating) {
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found.' });
    }
    res.append(
      'Created-At-Route',
      `${url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      })}/${rating._id}`
    );
    res.append(
      'Created-At',
      moment()
        .subtract(8, 'hours')
        .format()
    );
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
    const ratings = await Rating.getRatings();
    return res.status(200).json(ratings, limit);
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
    const rating = Rating.getRating(id);
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

module.exports.all = (req, res) => {
  const methods = ['GET', 'POST', 'DELETE'];
  if (methods.includes(req.method)) {
    res.set('Allow', methods.join(', '));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
