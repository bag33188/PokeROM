const mongoose = require('mongoose');
const romsValidator = require('../validation/roms-validator');

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
      min: [
        romsValidator.order_number[0],
        'Order number must not be negative.'
      ],
      max: [
        romsValidator.order_number[1],
        `Order number cannot exceed ${romsValidator.order_number[1]}.`
      ]
    },
    rom_type: {
      type: String,
      required: [true, 'ROM type is required.'],
      minlength: [
        romsValidator.rom_type[0],
        `ROM type is too short (must be at least ${
          romsValidator.rom_type[0]
        } characters).`
      ],
      maxlength: [
        romsValidator.rom_type[1],
        `ROM type is too long (can only ${
          romsValidator.rom_type[1]
        } characters at max).`
      ],
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
        romsValidator.file_name[0],
        `File name is too short (must be between ${
          romsValidator.file_name[0]
        } and ${romsValidator.file_name[1]} characters).`
      ],
      maxlength: [
        romsValidator.file_name[1],
        `File name is too long (must be between ${
          romsValidator.file_name[0]
        } and ${romsValidator.file_name[1]} characters).`
      ]
    },
    file_size: {
      type: Number,
      required: [true, 'File size is required.'],
      min: [
        romsValidator.file_size[0],
        `File too small (must be between ${romsValidator.file_size[0]} and ${
          romsValidator.file_size[1]
        } Kilobytes).`
      ],
      max: [
        romsValidator.file_size[1],
        `File too large (must be between ${romsValidator.file_size[0]} and ${
          romsValidator.file_size[1]
        } Kilobytes).`
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
        romsValidator.download_link[0],
        `URL is too short (must be between ${
          romsValidator.download_link[0]
        } and ${romsValidator.download_link[1]} characters).`
      ],
      maxlength: [
        romsValidator.download_link[1],
        `URL is too long (must be between ${
          romsValidator.download_link[0]
        } and ${romsValidator.download_link[1]} characters).`
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
      min: [
        romsValidator.generation[0],
        `Generation must be between ${romsValidator.generation[0]} and ${
          romsValidator.generation[1]
        }.`
      ],
      max: [
        romsValidator.generation[1],
        `Generation must be between ${romsValidator.generation[0]} and ${
          romsValidator.generation[1]
        }.`
      ]
    },
    box_art_url: {
      type: String,
      required: [true, 'Box art URL is required.'],
      minlength: [
        romsValidator.box_art_url[0],
        `URL is too short (must be between ${
          romsValidator.box_art_url[0]
        } and ${romsValidator.box_art_url[1]} characters).`
      ],
      maxlength: [
        romsValidator.box_art_url[1],
        `URL is too long (must be between ${romsValidator.box_art_url[0]} and ${
          romsValidator.box_art_url[1]
        } characters).`
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
        romsValidator.box_art_url[0],
        `Game name is too short (must be between ${
          romsValidator.box_art_url[0]
        } and ${romsValidator.box_art_url[1]} characters).`
      ],
      maxlength: [
        romsValidator.box_art_url[1],
        `Game name is too long (must be between ${
          romsValidator.box_art_url[0]
        } and ${romsValidator.box_art_url[1]} characters).`
      ]
    },
    region: {
      type: String,
      required: [true, 'Region is required.'],
      minlength: [
        romsValidator.region[0],
        `Region name is too short (must be between ${
          romsValidator.region[0]
        } and ${romsValidator.region[1]} characters).`
      ],
      maxlength: [
        romsValidator.region[1],
        `Region name is too long (must be between ${
          romsValidator.region[0]
        } and ${romsValidator.region[1]} characters).`
      ]
    },
    platform: {
      type: String,
      required: [true, 'Platform is required.'],
      minlength: [
        romsValidator.platform[0],
        `Platform name is too short (must be between ${
          romsValidator.platform[0]
        } and ${romsValidator.platform[1]} characters).`
      ],
      maxlength: [
        romsValidator.platform[1],
        `Platform name is too long (must be between ${
          romsValidator.platform[0]
        } and ${romsValidator.platform[1]} characters).`
      ]
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
      minlength: [
        romsValidator.description[0],
        `Description is too short (must be between ${
          romsValidator.description[0]
        } and ${romsValidator.description[1]} characters).`
      ],
      maxlength: [
        romsValidator.description[1],
        `Description is too long (must be between ${
          romsValidator.description[0]
        } and ${romsValidator.description[1]} characters).`
      ]
    },
    genre: {
      type: String,
      required: false,
      minlength: [
        romsValidator.genre[0],
        `Genre is too short (must be between ${romsValidator.genre[0]} and ${
          romsValidator.genre[1]
        } characters).`
      ],
      maxlength: [
        romsValidator.genre[1],
        `Genre is too long (must be between ${romsValidator.genre[0]} and ${
          romsValidator.genre[1]
        } characters).`
      ]
    },
    date_released: {
      type: Date,
      required: [true, 'Date released is required.']
    },
    logo_url: {
      type: String,
      required: [true, 'A logo URL is required.'],
      minlength: [
        romsValidator.logo_url[0],
        `URL is too short (must be between ${romsValidator.logo_url[0]} and ${
          romsValidator.logo_url[1]
        } characters).`
      ],
      maxlength: [
        romsValidator.logo_url[1],
        `URL is too long (must be between ${romsValidator.logo_url[0]} and ${
          romsValidator.logo_url[1]
        } characters).`
      ],
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
  const sortingQuery = { order_number: 1 };
  return Rom.find(query, callback)
    .sort(sortingQuery)
    .limit(parseInt(limit, 10));
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
  romHacks.forEach(romHack => (romHack.user_id = user._id));
  return Rom.insertMany(romHacks, callback);
};
