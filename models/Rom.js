const mongoose = require('mongoose');

const urlRegex = /^(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i;
const Schema = mongoose.Schema;

// create schema
const romSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'User ID is required.']
    },
    order_number: {
      type: Number,
      required: [true, 'Order number is required.'],
      min: [0, 'Order number must not be negative.'],
      max: [88, 'Order number cannot exceed 88.']
    },
    rom_type: {
      type: String,
      required: [true, 'ROM type is required.'],
      minlength: [4, 'ROM type is too short (must be at least 4 characters).'],
      maxlength: [5, 'ROM type is too long (can only 5 characters at max).'],
      validate: {
        validator: v => {
          return !(v.toLowerCase() !== 'core' && v.toLowerCase() !== 'hack');
        },
        message: props =>
          `${props.value} is not a valid ROM type. ROM type can only be "core" or "hack".`
      }
    },
    file_name: {
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
    file_size: {
      type: Number,
      required: [true, 'File size is required.'],
      min: [64, 'File too small (must be between 64 and 12000000 Kilobytes).'],
      max: [
        12000000,
        'File too large (must be between 64 and 12000000 Kilobytes).'
      ]
    },
    file_type: {
      type: String,
      required: [true, 'File type is required.'],
      validate: {
        validator: v => {
          return /^(?:\.?(gb[ca]?|[n3]ds|xci))$/i.test(v);
        },
        message: props => `${props.value} is not a valid file type`
      }
    },
    download_link: {
      type: String,
      required: [true, 'Download link is required.'],
      minlength: [
        8,
        'URL is too short (must be between 8 and 1000 characters).'
      ],
      maxlength: [
        1000,
        'URL is too long (must be between 8 and 1000 characters).'
      ],
      validate: {
        validator: v => {
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
    box_art_url: {
      type: String,
      required: [true, 'Box art URL is required.'],
      minlength: [
        8,
        'URL is too short (must be between 8 and 1000 characters).'
      ],
      maxlength: [
        1000,
        'URL is too long (must be between 8 and 1000 characters).'
      ],
      validate: {
        validator: v => {
          return urlRegex.test(v);
        },
        message: props => `${props.value} is not a valid URL.`
      }
    },
    game_name: {
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
      minlength: [
        2,
        'Genre is too short (must be between 2 and 20 characters).'
      ],
      maxlength: [
        20,
        'Genre is too long (must be between 2 and 20 characters).'
      ]
    },
    date_released: {
      type: Date,
      required: [true, 'Date released is required.']
    },
    logo_url: {
      type: String,
      required: [true, 'A logo URL is required.'],
      validate: {
        validator: v => {
          return urlRegex.test(v);
        },
        message: props => `${props.value} is not a valid URL.`
      }
    },
    is_favorite: {
      type: Boolean,
      required: [true, 'is_favorite is required.'],
      default: false
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model('Rom', romSchema);

// define ROM model
const Rom = module.exports;

module.exports.getAllRoms = (query, limit, callback) => {
  // make sure to parse limit as integer
  return Rom.find(query, callback)
    .limit(parseInt(limit))
    .sort({ order_number: 1 });
};

module.exports.getRomById = (id, callback) => {
  return Rom.findById(id, callback);
};

module.exports.addRom = (romData, callback) => {
  return Rom.create(romData, callback);
};

module.exports.updateRom = (id, romData, options, callback) => {
  const {
    order_number,
    file_name,
    file_size,
    file_type,
    download_link,
    generation,
    box_art_url,
    game_name,
    region,
    platform,
    description,
    genre,
    date_released,
    logo_url
  } = romData;
  const searchQuery = { _id: id };
  const updateQuery = {
    order_number,
    file_name,
    file_size,
    file_type,
    download_link,
    generation,
    box_art_url,
    game_name,
    region,
    platform,
    description,
    genre,
    date_released,
    logo_url
  };
  return Rom.findOneAndUpdate(searchQuery, updateQuery, options, callback);
};

module.exports.deleteRom = (id, callback) => {
  const query = { _id: id };
  return Rom.findOneAndDelete(query, callback);
};

module.exports.deleteAllRoms = (query, callback) => {
  return Rom.deleteMany(query, callback);
};

module.exports.patchRom = (id, updateQuery, callback) => {
  const searchQuery = { _id: id };
  return Rom.updateOne(searchQuery, updateQuery, callback);
};

module.exports.postCore = (coreRoms, user, callback) => {
  coreRoms.forEach(rom => (rom.user_id = user._id));
  return Rom.insertMany(coreRoms, callback);
};

module.exports.postHacks = (romHacks, user, callback) => {
  romHacks.forEach(romHack => {
    romHack.user_id = user._id;
  });
  return Rom.insertMany(romHacks, callback);
};
