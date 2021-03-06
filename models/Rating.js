const mongoose = require('mongoose');
const ratingsValidator = require('../validation/rating-validator');

function setDate(offset) {
  if (typeof offset !== 'number') {
    console.error('The offset argument must be a number.');
  } else {
    const now = new Date();
    now.setHours(now.getHours() - offset);
    return now;
  }
}

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: [true, 'A rating number is required.'],
      min: [
        ratingsValidator.rating[0],
        `Rating must be at least ${ratingsValidator.rating[0]}.`
      ],
      max: [
        ratingsValidator.rating[1],
        `Rating can only be ${ratingsValidator.rating[0]} at max.`
      ]
    },
    message: {
      type: String,
      required: false,
      maxlength: [
        ratingsValidator.message[1],
        `Rating message can only be ${
          ratingsValidator.message[1]
        } characters at max.`
      ]
    },
    date_time: {
      type: Date,
      required: [
        true,
        'A date and time is required for when the rating was made.'
      ],
      default: setDate(7)
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Rating', ratingSchema);

// define rating model
const Rating = module.exports;

module.exports.getRatings = (limit, callback) => {
  const sortingQuery = {
    rating: 1,
    date_time: -1
  };
  return Rating.find(callback)
    .sort(sortingQuery)
    .limit(parseInt(limit, 10));
};

module.exports.getRating = (id, callback) => {
  return Rating.findById(id, callback);
};

module.exports.deleteRating = (query, callback) => {
  return Rating.deleteOne(query, callback);
};

module.exports.deleteAllRatings = callback => {
  return Rating.deleteMany(callback);
};

module.exports.addRating = (newRating, callback) => {
  return Rating.create(newRating, callback);
};
