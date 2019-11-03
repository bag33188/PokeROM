const mongoose = require('mongoose');
const { validationResult } = require('express-validator/check');
const url = require('url');
const moment = require('moment');
const Rating = require('../models/Rating');
const [, clearCache] = require('../middleware/cache');

function checkErr(err, req, res) {
  if (err) {
    if (err.name === 'CastError') {
      return res.status(404).json({ success: false, ...err });
    }
    return res.status(500).json({ success: false, ...err });
  }
}

function noRatingResponse(rating, req, res) {
  if (!rating) {
    return res
      .status(404)
      .json({ success: false, message: 'Rating not found.' });
  }
}

function getRating(id, req, res, callback) {
  return Rating.getRating(id, (err, rating) => {
    checkErr(err, req, res);
    noRatingResponse(rating, req, res);
    return callback(rating);
  });
}

function checkValidId(id, req, res) {
  try {
    id = mongoose.Types.ObjectId(req.params.id);
  } catch (e) {
    return res
      .status(404)
      .json({ success: false, message: 'Rating not found.' });
  }
  return id;
}

module.exports.addRating = async (req, res, next) => {
  try {
    const newRating = new Rating({
      rating: req.body.rating,
      message: req.sanitize(req.body.message) || null
    });
    const { rating, message } = newRating;
    if (req.body.date_time) {
      req.body.date_time = req.sanitize(req.body.date_time.toString());
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() });
    }
    await Rating.addRating(newRating, (err, rating) => {
      if (err) {
        if (err.name === 'ValidationError') {
          return res.status(406).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      noRatingResponse(rating, req, res);
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
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getRating = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    await Rating.getRating(id, (err, rating) => {
      checkErr(err, req, res);
      noRatingResponse(rating, req, res);
      return res.status(200).json(rating);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getRatings = async (req, res, next) => {
  try {
    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }
    await Rating.getRatings((err, ratings) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!ratings) {
        return res
          .status(502)
          .json({ success: false, message: 'Bad gateway.' });
      }
      return res.status(200).json(ratings);
    }, limit);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteRating = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    await getRating(id, req, res, async () => {
      try {
        const query = { _id: id };
        await Rating.deleteRating(query, (err, status) => {
          checkErr(err, req, res);
          if (!status) {
            return res
              .status(404)
              .json({ success: false, message: 'Rating not found.' });
          }
          clearCache(req);
          return res.status(200).json({ success: true, ...status });
        });
      } catch (err) {
        next(err);
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteRatings = async (req, res, next) => {
  try {
    await Rating.deleteAllRatings((err, status) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!status) {
        return res
          .status(502)
          .json({ success: false, message: 'Bad gateway.' });
      }
      clearCache(req);
      return res.status(200).json({ success: true, ...status });
    });
  } catch (err) {
    next(err);
  }
};

module.exports.ratingsHeaders = (req, res) => {
  res.status(200);
};

module.exports.ratingHeaders = async (req, res, next) => {
  try {
    let id = null;
    id = checkValidId(id, req, res);
    await getRating(id, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
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
