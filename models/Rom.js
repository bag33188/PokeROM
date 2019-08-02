const mongoose = require('mongoose');

const urlRegex = /^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i;
const Schema = mongoose.Schema;

// create schema
const romSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'User ID is required.']
  },
  orderNumber: {
    type: Number,
    required: [true, 'Order number is required.'],
    min: [0, 'Order number must not be negative.'],
    max: [88, 'Order number cannot exceed 88.']
  },
  romType: {
    type: String,
    required: [true, 'ROM type is required.'],
    minlength: [4, 'ROM type is too short (must be at least 4 characters).'],
    maxlength: [5, 'ROM type is too long (can only 5 characters at max).'],
    validate: {
      validator: function(v) {
        return !(v.toLowerCase() !== 'core' && v.toLowerCase() !== 'hack');
      },
      message: props =>
        `${props.value} is not a valid ROM type. ROM type can only be "core" or "hack".`
    }
  },
  fileName: {
    type: String,
    required: [true, 'File name is required.'],
    minlength: [
      3,
      'File name is too short (must be between 3 and 80 characters).'
    ],
    maxlength: [
      80,
      'File name is too long (must be between 3 and 80 characters).'
    ]
  },
  fileSize: {
    type: Number,
    required: [true, 'File size is required.'],
    min: [64, 'File too small (must be between 64 and 12000000 Kilobytes).'],
    max: [
      12000000,
      'File too large (must be between 64 and 12000000 Kilobytes).'
    ]
  },
  fileType: {
    type: String,
    required: [true, 'File type is required.'],
    validate: {
      validator: function(v) {
        return /^(?:\.?(gb[ca]?|[n3]ds|xci))$/i.test(v);
      },
      message: props => `${props.value} is not a valid file type`
    }
  },
  downloadLink: {
    type: String,
    required: [true, 'Download link is required.'],
    minlength: [8, 'URL is too short (must be between 8 and 1000 characters).'],
    maxlength: [
      1000,
      'URL is too long (must be between 8 and 1000 characters).'
    ],
    validate: {
      validator: function(v) {
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
    maxlength: [
      1000,
      'URL is too long (must be between 8 and 1000 characters).'
    ],
    validate: {
      validator: function(v) {
        return urlRegex.test(v);
      },
      message: props => `${props.value} is not a valid URL.`
    }
  },
  gameName: {
    type: String,
    required: [true, 'Game name is required.'],
    minlength: [
      2,
      'Game name is too short (must be between 2 and 42 characters).'
    ],
    maxlength: [
      42,
      'Game name is too long (must be between 2 and 42 characters).'
    ]
  },
  region: {
    type: String,
    required: [true, 'Region is required.'],
    minlength: [
      3,
      'Region name is too short (must be between 3 and 10 characters).'
    ],
    maxlength: [
      10,
      'Region name is too long (must be between 3 and 10 characters).'
    ]
  },
  platform: {
    type: String,
    required: [true, 'Platform is required.'],
    minlength: [
      2,
      'Platform name is too short (must be between 2 and 50 characters).'
    ],
    maxlength: [
      50,
      'Platform name is too long (must be between 2 and 50 characters).'
    ]
  },
  description: {
    type: String,
    required: [true, 'Description is required.'],
    minlength: [
      5,
      'Description is too short (must be between 5 and 8000 characters).'
    ],
    maxlength: [
      8000,
      'Description is too long (must be between 5 and 8000 characters).'
    ]
  },
  genre: {
    type: String,
    required: false,
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
      validator: function(v) {
        return urlRegex.test(v);
      },
      message: props => `${props.value} is not a valid URL.`
    }
  }
});

// create ROM model
const Rom = (module.exports = mongoose.model('Rom', romSchema));

/**
 * @summary Get all ROMs.
 * @description Gets all ROMs from the database and can apply optional limit.
 * @param {object} query The query to get all roms by.
 * @param {any} callback The callback function.
 * @param {string} limit The number of ROMs to limit.
 */
module.exports.getAllRoms = (query, callback, limit) => {
  // make sure to parse limit as integer
  Rom.find(query, callback)
    .limit(parseInt(limit))
    .sort({ orderNumber: 1 });
};

/**
 * @summary Get ROM by ID.
 * @description Gets a single ROM from the database by its ID.
 * @param {object} query The query for getting a single ROM.
 * @param {any} callback The callback function.
 */
module.exports.getRomById = (query, callback) => {
  Rom.findById(query, callback);
};

/**
 * @summary Add ROM.
 * @description Adds a ROM to the database.
 * @param {object} newRom The new ROM data to add to the database.
 * @param {any} callback The callback function.
 */
module.exports.addRom = (newRom, callback) => {
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
module.exports.updateRom = (query, romData, options, callback) => {
  const {
    orderNumber,
    fileName,
    fileSize,
    fileType,
    downloadLink,
    generation,
    boxArtUrl,
    gameName,
    region,
    platform,
    description,
    genre,
    dateReleased,
    logoUrl
  } = romData;
  const updateQuery = {
    orderNumber,
    fileName,
    fileSize,
    fileType,
    downloadLink,
    generation,
    boxArtUrl,
    gameName,
    region,
    platform,
    description,
    genre,
    dateReleased,
    logoUrl
  };
  Rom.findOneAndUpdate(query, updateQuery, options, callback);
};

/**
 * @summary Delete ROM.
 * @description Deletes a ROM in the database.
 * @param {object} query The query to delete with.
 * @param {any} callback The callback function.
 */
module.exports.deleteRom = (query, callback) => {
  Rom.findOneAndDelete(query, callback);
};

/**
 * @summary Delete All ROMs.
 * @description Delete's all ROMs in the database.
 * @param query The deletion query.
 * @param {any} callback The callback function.
 */
module.exports.deleteAllRoms = (query, callback) => {
  Rom.deleteMany(query, callback);
};

/**
 * @summary Patch ROM.
 * @description Partially updates a ROM.
 * @param {object} idQuery The ID query to partially update with.
 * @param {object} query The data to partially update with.
 * @param {any} callback The callback function.
 */
module.exports.patchRom = (idQuery, query, callback) => {
  Rom.updateOne(idQuery, query, callback);
};

/**
 * @summary Post Core ROMs.
 * @description Adds all core ROMs to the database.
 * @param {Array<Rom>} coreRoms The core ROMs array.
 * @param {User} user The user object.
 * @param {any} callback The callback function.
 */
module.exports.postCore = (coreRoms, user, callback) => {
  coreRoms.forEach(rom => (rom.userId = user['_id']));
  Rom.insertMany(coreRoms, callback);
};

/**
 * @summary Post ROM Hacks.
 * @description Adds some ROM Hacks to the database.
 * @param {Array<Rom>} romHacks The ROM Hacks array.
 * @param {User} user The user object.
 * @param {any} callback The callback function.
 */
module.exports.postHacks = (romHacks, user, callback) => {
  romHacks.forEach(romHack => {
    romHack.userId = user['_id'];
  });
  Rom.insertMany(romHacks, callback);
};
