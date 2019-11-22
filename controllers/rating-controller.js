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
    const newRating = new Rating({
      rating: req.body.rating,
      message: req.sanitize(req.body.message) || null
    });
    if (req.body.date_time) {
      req.body.date_time = req.sanitize(req.body.date_time.toString());
    }
    const rating = await Rating.addRating(newRating);
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
        .subtract(7, 'hours')
        .format()
    );
    clearCache(req);
    return res.status(201).json(rating);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(406).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
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
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.getRatings = async (req, res) => {
  try {
    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }
    const ratings = await Rating.getRatings();
    if (!ratings) {
      return res.status(502).json({ success: false, message: 'Bad gateway.' });
    }
    return res.status(200).json(ratings, limit);
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
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
    return res.status(200).json({ success: true, ...status });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
};

module.exports.deleteRatings = async (req, res) => {
  try {
    await Rating.deleteAllRatings();
    clearCache(req);
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, ...err });
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
      return res.status(404).json({ success: false });
    }
    return res.status(200);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
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
