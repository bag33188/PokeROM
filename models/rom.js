const mongoose = require('mongoose');

const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

// create schema
const RomSchema = mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'User ID is required.']
  },
  orderNumber: {
    type: Number,
    required: [true, 'Order number is required.'],
    min: [0, 'Order number must not be negative.'],
    max: [88, 'Order number cannot exceed 88.']
  },
  fileName: {
    type: String,
    required: [true, 'File name is required.'],
    minlength: [3, 'File name is too short (must be between 3 and 80 characters).'],
    maxlength: [80, 'File name is too long (must be between 3 and 80 characters).']
  },
  fileSize: {
    type: Number,
    required: [true, 'File size is required.'],
    min: [64, 'File too small (must be between 64 and 12000000 Kilobytes).'],
    max: [12000000, 'File too large (must be between 64 and 12000000 Kilobytes).']
  },
  fileType: {
    type: String,
    required: [true, 'File type is required.'],
    validate: {
      validator: function (v) {
        return /^(?:(.?)(gb[ac]?|[n3]ds|xci))$/.test(v);
      },
      message: props => `${props.value} is not a valid file type`
    }
  },
  downloadLink: {
    type: String,
    required: [true, 'Download link is required.'],
    minlength: [8, 'URL is too short (must be between 8 and 1000 characters).'],
    maxlength: [1000, 'URL is too long (must be between 8 and 1000 characters).'],
    validate: {
      validator: function (v) {
        return urlRegex.test(v);
      },
      message: props => `${props.value} is not a valid URL.`
    }
  },
  generation: {
    type: Number,
    required: [true, 'Generation is required.'],
    min: [1, 'Generation must be between 1 and 8 (must be between 1 and 8).'],
    max: [8, 'Generation must be between 1 and 8 (must be between 1 and 8).']
  },
  boxArtUrl: {
    type: String,
    required: [true, 'Box art URL is required.'],
    minlength: [8, 'URL is too short (must be between 8 and 1000 characters).'],
    maxlength: [1000, 'URL is too long (must be between 8 and 1000 characters).'],
    validate: {
      validator: function (v) {
        return urlRegex.test(v);
      },
      message: props => `${props.value} is not a valid URL.`
    }
  },
  gameName: {
    type: String,
    required: [true, 'Game name is required.'],
    minlength: [2, 'Game name is too short (must be between 2 and 42 characters).'],
    maxlength: [42, 'Game name is too long (must be between 2 and 42 characters).']
  },
  region: {
    type: String,
    required: [true, 'Region is required.'],
    minlength: [3, 'Region name is too short (must be between 3 and 10 characters).'],
    maxlength: [10, 'Region name is too long (must be between 3 and 10 characters).']
  },
  platform: {
    type: String,
    required: [true, 'Platform is required.'],
    minlength: [2, 'Platform name is too short (must be between 2 and 50 characters).'],
    maxlength: [50, 'Platform name is too long (must be between 2 and 50 characters).']
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    minlength: [5, 'Description is too short (must be between 5 and 8000 characters).'],
    maxlength: [8000, 'Description is too long (must be between 5 and 8000 characters).']
  },
  genre: {
    type: String,
    minlength: [2, 'Genre is too short (must be between 2 and 20 characters).'],
    maxlength: [20, 'Genre is too long (must be between 2 and 20 characters).']
  },
  dateReleased: {
    type: Date,
    required: [true, 'Date released is required.']
  },
  logoUrl: {
    type: String,
    required: [true, 'A logo URL is required.'],
    validate: {
      validator: function (v) {
        return urlRegex.test(v);
      },
      message: props => `${props.value} is not a valid URL.`
    }
  }
}/*, {
  versionKey: false
}*/);

// create ROM model
const Rom = module.exports = mongoose.model('Rom', RomSchema);

/**
 * @summary Get all ROMs.
 * @description Gets all ROMs from the database and can apply optional limit.
 * @param {any} callback The callback function.
 * @param {number} limit The number of ROMs to limit.
 */
module.exports.getAllRoms = function (query, callback, limit) {
  // make sure to parse limit as integer
  Rom.find(query, callback).limit(parseInt(limit)).sort({ orderNumber: 1 });
};

/**
 * @summary Get ROM by ID.
 * @description Gets a single ROM from the database by its ID.
 * @param {object} query The query for getting a single ROM.
 * @param {any} callback The callback function.
 */
module.exports.getRomById = function (query, callback) {
  Rom.findById(query, callback);
};

/**
 * @summary Add ROM.
 * @description Adds a ROM to the database.
 * @param {object} newRom The new ROM data to add to the database.
 * @param {any} callback The callback function.
 */
module.exports.addRom = function (newRom, callback) {
  Rom.create(newRom, callback);
};

/**
 * @summary Update ROM.
 * @description Update's a single ROM in the database.
 * @param {object} query The query to update with.
 * @param {object} romData The rom data to update with.
 * @param {object} options N/A.
 * @param {any} callback The callback function.
 */
module.exports.updateRom = function (query, romData, options, callback) {
  const updateQuery = {
    orderNumber: romData.orderNumber,
    fileName: romData.fileName,
    fileSize: romData.fileSize,
    fileType: romData.fileType,
    downloadLink: romData.downloadLink,
    generation: romData.generation,
    boxArtUrl: romData.boxArtUrl,
    gameName: romData.gameName,
    region: romData.region,
    platform: romData.platform,
    description: romData.description,
    genre: romData.genre,
    dateReleased: romData.dateReleased,
    logoUrl: romData.logoUrl
  };
  Rom.findOneAndUpdate(query, updateQuery, options, callback);
};

/**
 * @summary Delete ROM.
 * @description Deletes a ROM in the database.
 * @param {object} query The query to delete with.
 * @param {any} callback The callback function.
 */
module.exports.deleteRom = function (query, callback) {
  Rom.findOneAndDelete(query, callback);
};

/**
 * @summary Delete All ROMs.
 * @description Delete's all ROMs in the database.
 * @param {any} callback The callback function.
 */
module.exports.deleteAllRoms = function (callback) {
  Rom.deleteMany(callback);
};

/**
 * @summary Patch ROM.
 * @description Partially updates a ROM.
 * @param {object} idQuery The ID query to partially update with.
 * @param {object} query The data to partially update with.
 * @param {any} callback The callback function.
 */
module.exports.patchRom = function (idQuery, query, callback) {
  Rom.updateOne(idQuery, query, callback);
};

/**
 * @summary Post Core ROMs.
 * @description Adds all core ROMs to the database.
 * @param {Array<Rom>} coreRoms The core ROMs array.
 * @param {User} user The user object.
 */
module.exports.postCore = function (coreRoms, user) {
  coreRoms.forEach(rom => {
    rom.userId = user['_id'];
    Rom.create(rom);
  });
};
