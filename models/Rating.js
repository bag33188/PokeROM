const mongoose = require('mongoose');

function setDate(offset) {
  let now = new Date();
  now.setHours(now.getHours() - offset);
  return now;
}

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: [true, 'A rating number is required.'],
      min: [1, 'Rating must be at least 1.'],
      max: [10, 'Rating can only be 10 at max.']
    },
    message: {
      type: String,
      required: false,
      maxlength: [1000, 'Rating message can only be 1000 characters at max.']
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

module.exports.getRatings = (callback, limit) => {
  Rating.find(callback)
    .sort({
      rating: 1,
      date_time: -1
    })
    .limit(parseInt(limit, 10));
};

module.exports.getRating = (id, callback) => {
  Rating.findById(id, callback);
};

module.exports.deleteRating = (query, callback) => {
  Rating.deleteOne(query, callback);
};

module.exports.deleteAllRatings = callback => {
  Rating.deleteMany(callback);
};

module.exports.addRating = (newRating, callback) => {
  Rating.create(newRating, callback);
};
