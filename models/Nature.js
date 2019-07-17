const mongoose = require('mongoose');

// create mongoose schema
const NatureSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The name of the nature is required.'],
    minlength: [4, 'Nature must be at least 4 characters.'],
    maxlength: [10, 'Nature can only be 10 characters at max.']
  },
  up: {
    type: String,
    required: [true, 'The increased stat of the nature is required.'],
    minlength: [
      4,
      'The increased stat of the nature  must be at least 4 characters.'
    ],
    maxlength: [
      20,
      'The increased stat of the nature  can only be 20 characters at max.'
    ]
  },
  down: {
    type: String,
    required: [true, 'The decreased stat of the nature is required.'],
    minlength: [
      4,
      'The decreased stat of the nature  must be at least 4 characters.'
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
});

// create ROM model
const Nature = (module.exports = mongoose.model('Nature', NatureSchema));

/**
 * @summary Get All Natures
 * @description Gets all natures from the database.
 * @param {Response} callback The callback function.
 */
module.exports.getNatures = callback => {
  Nature.find(callback).sort({
    up: 1,
    down: 1
  });
};

/**
 * @summary Get Single Nature.
 * @description Gets a single nature from the database.
 * @param {object} query The query to grab the nature with (usually the ID query).
 * @param {Response} callback The callback function.
 */
module.exports.getNature = (query, callback) => {
  Nature.findById(query, callback);
};

/**
 * @summary Patch Nature.
 * @description Partially updates a nature in the database.
 * @param {object} idQuery The ID query that finds the nature to partially update.
 * @param {object} query The data to update the nature with.
 * @param {Response} callback The callback function.
 */
module.exports.patchNature = (idQuery, query, callback) => {
  Nature.updateOne(idQuery, query, callback);
};

/**
 * @summary Delete Nature
 * @description Deletes one nature in the database.
 * @param {object} query The id query for locating which nature to delete.
 * @param {Response} callback The callback function
 */
module.exports.deleteNature = (query, callback) => {
  Nature.deleteOne(query, callback);
};

/**
 * @summary Delete All Natures
 * @description Deletes all natures in the database.
 * @param {any} callback The callback function.
 */
module.exports.deleteAllNatures = callback => {
  Nature.deleteMany(callback);
};

/**
 * @summary Add Nature
 * @description Adds a nature to the database.
 * @param {Nature} newNature The new nature to add.
 * @param {Response} callback The callback function.
 */
module.exports.addNature = (newNature, callback) => {
  Nature.create(newNature, callback);
};

/**
 * @summary Update Nature
 * @description Updates a nature in the database.
 * @param {object} query The query to find the nature.
 * @param {Nature} natureData The data to update the nature with.
 * @param {object} options Any options (none in this case).
 * @param {any} callback The callback function.
 */
module.exports.updateNature = (query, natureData, options, callback) => {
  const natureQuery = {
    name: natureData.name,
    up: natureData.up,
    down: natureData.down,
    flavor: natureData.flavor,
    usage: natureData.usage
  };
  Nature.findOneAndUpdate(query, natureQuery, options, callback);
};

/**
 * @summary Post All Natures
 * @description Adds all natures to the database.
 * @param {Array<Nature>} allNatures The natures array containing all natures.
 */
module.exports.postAll = (allNatures, callback) => {
  const naturesAsync = new Promise((resolve, reject) => {
    allNatures.forEach(nature => {
      Nature.create(nature);
    });
    resolve('Done!');
    reject(new Error('Error!'));
  });
  naturesAsync.then(() => callback()).catch(err => console.log(err));
};
