const express = require('express');
const mongoose = require('mongoose');
const {sanitizeBody} = require('express-validator/filter');
const {check, validationResult} = require('express-validator/check');
const url = require('url');
const moment = require('moment');
const Rating = require('../../models/Rating');
const auth = require('../../middleware/auth');

const httpRouter = express.Router();

function setDate() {
  let now = new Date();
  now.setHours(now.getHours() - 7);
  return now;
}

function getRating(query, req, res, callback) {
  return Rating.getRating(query, (err, rating) => {
    if (err) {
      if (err.name === 'CastError') {
        return res.status(404).json({success: false, ...err});
      } else {
        return res.status(500).json({success: false, ...err});
      }
    }
    if (!rating) {
      return res
        .status(404)
        .json({success: false, message: 'Error 404: nature not found.'});
    }
    return callback(rating);
  });
}

httpRouter.post('/', [
  sanitizeBody(['message', 'dateTime']).trim().escape(),
  check('message').optional().isLength({max: 1000}).withMessage('Rating message can only be 1000 characters at max.').isString(),
  check('rating').not().isEmpty().withMessage('Rating is required.').isInt({min: 1, max: 10}).withMessage('Rating must be in between 1 and 10.')
], async (req, res, next) => {
  try {
    const dateAndTime = setDate();
    const newRating = new Rating({
      rating: req.body.rating,
      message: req.body.message,
      dateTime: dateAndTime
    });
    const {rating, message, dateTime} = newRating;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(406).json({ success: false, errors: errors.array() })
    }
    await Rating.addRating(newRating, (err, rating) => {
      if (err) {
        if (err.name === 'ValidationError') {
          return res.status(406).json({success: false, ...err});
        }
        return res.status(500).json({ success: false, ...err });
      }
      if (!rating) {
        return res.status(502).json({success: false, message: 'Bad gateway.'});
      }
      res.append('Created-At-Route', `${url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
      })}/${rating._id}`);
      res.append('Created-At', moment().format());
      return res.status(201).json(rating);
    });
  } catch (err) {
    next(err);
  }
});

httpRouter.get('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'Rating not found.'});
    }
    await Rating.getRating({_id: id}, (err, rating) => {
      if (err) {
        if (err.name === 'CastError') {
          return res.status(404).json({ success: false, ...err });
        }
        return res.status(500).json({ success: false, ...err });
      }
      if (!rating) {
        return res.status(404).json({ success: false, message: 'Rating not found.' });
      }
      return res.status(200).json(rating);
    });
  } catch (err) {
    next(err);
  }
});

httpRouter.get('/', auth, async (req, res, next) => {
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
        return res.status(502).json({ success: false, message: 'Bad gateway.' });
      }
      return res.status(200).json(ratings);
    }, limit);
  } catch (err) {
    next(err);
  }
});

httpRouter.delete('/:id', auth, async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'Rating not found.'});
    }
    await getRating({_id: id}, req, res, () => {
      Rating.deleteRating({_id: id}, (err, status) => {
        if (err) {
          if (err.name === 'CastError') {
            return res.status(404).json({ success: false, ...err });
          }
          return res.status(500).json({ success: false, ...err });
        }
        if (!status) {
          return res.status(404).json({ success: false, message: 'Rating not found.' });
        }
        return res.status(200).json({ success: true, ...status });
      });
    });

  } catch (err) {
    next(err);
  }
});

httpRouter.delete('/', auth, async (req, res, next) => {
  try {
    await Rating.deleteAllRatings((err, status) => {
      if (err) {
        return res.status(500).json({ success: false, ...err });
      }
      if (!status) {
        return res.status(502).json({ success: false, message: 'Bad gateway.' });
      }
      return res.status(200).json({ success: true, ...status });
    });
  } catch (err) {
    next (err);
  }
});

httpRouter.head('/', async (req, res, next) => {
  try {
    await res.status(200);
  } catch (err) {
    next(err);
  }
});

httpRouter.head('/:id', async (req, res, next) => {
  try {
    let id;
    try {
      id = mongoose.Types.ObjectId(req.params.id);
    } catch {
      return res.status(404).json({success: false, message: 'Rating not found.'});
    }
    await getRating({ _id: id }, req, res, () => {
      return res.status(200);
    });
  } catch (err) {
    next(err);
  }
});

httpRouter.all('/*', async (req, res, next) => {
  try {
    res.set('Allow', 'GET, POST, DELETE');
    await res.status(405).json({success: false, message: 'Method not allowed.'});
  } catch (err) {
    next(err);
  }
});

module.exports = httpRouter;

