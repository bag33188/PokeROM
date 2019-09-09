const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create mongoose schema
const natureSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The name of the nature is required.'],
      minlength: [3, 'Nature must be at least 3 characters.'],
      maxlength: [10, 'Nature can only be 10 characters at max.']
    },
    up: {
      type: String,
      required: [true, 'The increased stat of the nature is required.'],
      minlength: [
        4,
        'The increased stat of the nature must be at least 4 characters.'
      ],
      maxlength: [
        20,
        'The increased stat of the nature can only be 20 characters at max.'
      ]
    },
    down: {
      type: String,
      required: [true, 'The decreased stat of the nature is required.'],
      minlength: [
        4,
        'The decreased stat of the nature must be at least 4 characters.'
      ],
      maxlength: [
        20,
        'The decreased stat of the nature can only be 20 characters at max.'
      ]
    },
    flavor: {
      type: String,
      required: false,
      minlength: [4, 'The flavor of the nature must be at least 4 characters.'],
      maxlength: [
        14,
        'The flavor of the nature can only be 14 characters at max.'
      ]
    },
    usage: {
      type: String,
      required: [true, 'The usage for the nature is required'],
      minlength: [5, 'The usage for the nature must be at least 5 characters.'],
      maxlength: [
        40,
        'The usage for the nature can only be 40 characters at max.'
      ]
    }
  },
  {
    versionKey: false
  }
);

// create ROM model
const Nature = (module.exports = mongoose.model('Nature', natureSchema));

module.exports.getNatures = callback => {
  Nature.find(callback).sort({
    up: 1,
    down: 1
  });
};

module.exports.getNature = (id, callback) => {
  Nature.findById({ _id: id }, callback);
};

module.exports.patchNature = (id, query, callback) => {
  Nature.updateOne({ _id: id }, query, callback);
};

module.exports.deleteNature = (id, callback) => {
  Nature.findOneAndDelete({ _id: id }, callback);
};

module.exports.deleteAllNatures = callback => {
  Nature.deleteMany(callback);
};

module.exports.addNature = (newNature, callback) => {
  Nature.create(newNature, callback);
};

module.exports.updateNature = (id, natureData, options, callback) => {
  const { name, up, down, flavor, usage } = natureData;
  const natureQuery = {
    name,
    up,
    down,
    flavor,
    usage
  };
  Nature.findOneAndUpdate({ _id: id }, natureQuery, options, callback);
};

module.exports.postAll = (allNatures, callback) => {
  Nature.insertMany(allNatures, callback);
};
