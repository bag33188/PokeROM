const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratingSchema = new Schema({
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
  dateTime: {
    type: Date,
    required: [true, 'A date and time is required for when the rating was made.']
  }
});

const Rating = (module.exports = mongoose.model('Rating', ratingSchema));

module.exports.getRatings = (callback, limit) => {
  Rating.find(callback).sort({
    rating: 1,
    dateTime: -1
  }).limit(parseInt(limit));
};

module.exports.getRating = (query, callback) => {
  Rating.findById(query, callback);
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
