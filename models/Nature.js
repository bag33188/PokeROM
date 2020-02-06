const mongoose = require('mongoose');
const naturesValidator = require('../validation/natures-validator');

const Schema = mongoose.Schema;

// create mongoose schema
const natureSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'The name of the nature is required.'],
      minlength: [
        naturesValidator.name[0],
        `Nature must be at least ${naturesValidator.name[0]} characters.`
      ],
      maxlength: [
        naturesValidator.name[1],
        `Nature can only be ${naturesValidator.name[1]} characters at max.`
      ]
    },
    up: {
      type: String,
      required: [true, 'The increased stat of the nature is required.'],
      minlength: [
        naturesValidator.up[0],
        `The increased stat of the nature must be at least ${
          naturesValidator.up[0]
        } characters.`
      ],
      maxlength: [
        naturesValidator.up[1],
        `The increased stat of the nature can only be ${
          naturesValidator.up[1]
        } characters at max.`
      ]
    },
    down: {
      type: String,
      required: [true, 'The decreased stat of the nature is required.'],
      minlength: [
        naturesValidator.down[0],
        `The decreased stat of the nature must be at least ${
          naturesValidator.down[0]
        } characters.`
      ],
      maxlength: [
        naturesValidator.down[1],
        `The decreased stat of the nature can only be ${
          naturesValidator.down[1]
        } characters at max.`
      ]
    },
    flavor: {
      type: String,
      required: false,
      minlength: [
        naturesValidator.flavor[0],
        `The flavor of the nature must be at least ${
          naturesValidator.flavor[0]
        } characters.`
      ],
      maxlength: [
        naturesValidator.flavor[1],
        `The flavor of the nature can only be ${
          naturesValidator.flavor[1]
        } characters at max.`
      ]
    },
    usage: {
      type: String,
      required: [true, 'The usage for the nature is required'],
      minlength: [
        naturesValidator.usage[0],
        `The usage for the nature must be at least ${
          naturesValidator.usage[0]
        } characters.`
      ],
      maxlength: [
        naturesValidator.usage[1],
        `The usage for the nature can only be ${
          naturesValidator.usage[1]
        } characters at max.`
      ]
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Nature', natureSchema);

// define ROM model
const Nature = module.exports;

module.exports.getNatures = callback => {
  return Nature.find(callback).sort({
    up: 1,
    down: 1
  });
};

module.exports.getNature = (id, callback) => {
  return Nature.findById(id, callback);
};

module.exports.patchNature = (id, updateQuery, callback) => {
  const searchQuery = { _id: id };
  return Nature.updateOne(searchQuery, updateQuery, callback);
};

module.exports.deleteNature = (id, callback) => {
  const query = { _id: id };
  return Nature.findOneAndDelete(query, callback);
};

module.exports.deleteAllNatures = callback => {
  return Nature.deleteMany(callback);
};

module.exports.addNature = (natureData, callback) => {
  return Nature.create(natureData, callback);
};

module.exports.updateNature = (id, natureData, options, callback) => {
  const { name, up, down, flavor, usage } = natureData;
  const searchQuery = { _id: id };
  const updateQuery = {
    name,
    up,
    down,
    flavor,
    usage
  };
  return Nature.findOneAndUpdate(searchQuery, updateQuery, options, callback);
};

module.exports.postAll = (allNaturesData, callback) => {
  return Nature.insertMany(allNaturesData, callback);
};
