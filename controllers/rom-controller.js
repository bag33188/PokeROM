const { validationResult } = require('express-validator/check');
const Rom = require('../models/Rom');
const [coreRoms, romHacks] = require('../database/data.json');
const { clearCache } = require('../middleware/cache');
const universal = require('../routes/universal');
const {
  checkForInvalidRoute,
  checkForInvalidFields
} = require('../middleware/check-validity');

const routesWithParams = ['core', 'hacks'];
const fields = [
  '_id',
  'file_size',
  'file_type',
  'file_name',
  'date_released',
  'description',
  'genre',
  'platform',
  'region',
  'generation',
  'game_name',
  'order_number',
  'rom_type',
  'is_favorite',
  'download_link',
  'logo_url',
  'box_art_url'
];
const romObject = req => {
  return {
    user_id: req.user._id,
    order_number: req.body.order_number,
    rom_type: req.sanitize(req.body.rom_type),
    file_name: req.sanitize(req.body.file_name),
    file_size: req.body.file_size,
    file_type: req.sanitize(req.body.file_type),
    download_link: req.sanitize(req.body.download_link),
    generation: req.body.generation,
    box_art_url: req.sanitize(req.body.box_art_url),
    game_name: req.sanitize(req.body.game_name),
    region: req.sanitize(req.body.region),
    platform: req.sanitize(req.body.platform),
    description: req.sanitize(req.body.description),
    genre: req.sanitize(req.body.genre) || null,
    date_released: req.sanitize(req.body.date_released),
    logo_url: req.sanitize(req.body.logo_url),
    is_favorite: req.body.is_favorite
  };
};

String.prototype.convertToDateFormat = function() {
  const dateArr = this.replace(/(&#[xX]2[Ff];)/g, '/').split('/');
  const monthIndex = parseInt(dateArr[0], 10) - 1;
  const day = parseInt(dateArr[1], 10);
  const year = parseInt(dateArr[2], 10);
  return new Date(year, monthIndex, day);
};

function convertToBoolean(value) {
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      break;
  }
}

module.exports.getRoms = async (req, res) => {
  try {
    const getAllCore = req.query['core'];
    const getAllHacks = req.query['hacks'];
    const getFavorites = req.query['favorites'];

    let query = {};
    if (convertToBoolean(getAllCore) && !convertToBoolean(getAllHacks)) {
      query = { user_id: req.user._id, rom_type: 'core' };
    } else if (convertToBoolean(getAllHacks) && !convertToBoolean(getAllCore)) {
      query = { user_id: req.user._id, rom_type: 'hack' };
    } else {
      query = { user_id: req.user._id };
    }

    if (convertToBoolean(getFavorites)) {
      query = { ...query, is_favorite: true };
    }

    let limit = req.query['_limit'];
    if (!limit) {
      limit = 0;
    }

    const roms = await Rom.getAllRoms(query, limit);

    // --------------------------
    // PAGINATION LOGIC
    // --------------------------

    // grab query params
    let perPage = parseInt(req.query['per_page'], 10);
    let page = parseInt(req.query['page'], 10);
    // if no page is specified or no page and no perPage are specified ...
    if (!page || (!page && !perPage)) {
      // just return the roms as they usually are
      return res.status(200).json(roms);
    }
    // if they specify a page but no per page
    if (page && !perPage) {
      perPage = 4;
    }
    // grab the page count (perPage is 4 by default)
    const pageCount = Math.ceil(roms.length / perPage);
    // the page number is greater than the page count ...
    if (page > pageCount) {
      // set the page number equal to the page count
      // (this is for error-proofing)
      page = pageCount;
    }
    // now do the math ...
    const paginationFormulaResult = roms.slice(
      page * perPage - perPage,
      page * perPage
    );
    // return the paginated roms
    return res.status(200).json(paginationFormulaResult);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.getRom = async (req, res) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const rom = await Rom.getRomById(id);
    if (!rom) {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    if (req.user._id.toString() !== rom.user_id.toString()) {
      return res.status(403).json({
        success: false,
        message: `You cannot retrieve this user's ROM.`
      });
    }
    return res.status(200).json(rom);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.addRom = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const { date_released, rom_type } = req.body;
    req.body.date_released = date_released.convertToDateFormat();
    if (rom_type) {
      req.body.rom_type = rom_type.toLowerCase();
    }
    const romData = new Rom(romObject(req));
    if (checkForInvalidFields(req, fields) === true) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    clearCache(req, routesWithParams);
    const rom = await Rom.addRom(romData);
    return res.status(201).json(rom);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    } else if (err.name === 'MongoError') {
      return res.status(406).json({
        success: false,
        message: 'Document failed database validation.'
      });
    } else {
      return res
        .status(500)
        .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.updateRom = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }

    const { date_released, rom_type } = req.body;
    req.body.date_released = date_released.convertToDateFormat();
    req.body.rom_type = rom_type.toLowerCase();
    const updateRomData = romObject(req);
    if (checkForInvalidFields(req, fields) === true) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    const rom = await Rom.getRomById(id);
    if (!rom) {
      return res.status(404).json({
        success: false,
        message: 'ROM not found.'
      });
    }
    if (rom.user_id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: `You cannot update this user's ROM.`
      });
    }
    await Rom.updateRom(id, updateRomData, {});
    clearCache(req, routesWithParams);
    const updatedRom = await Rom.getRomById(id);
    // updatedRom.date_released = new Date(updatedRom.date_released);
    return res.status(200).json(updatedRom);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res
          .status(404)
          .json({ success: false, message: 'ROM not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Request body is invalid.' });
      case 'MongoError':
        return res.status(406).json({
          success: false,
          message: 'Document failed database validation.'
        });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.patchRom = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({ success: false, errors: errors.array() });
  }
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const { date_released, rom_type } = req.body;
    if (date_released) {
      req.body.date_released = date_released.convertToDateFormat();
    }
    if (rom_type) {
      req.body.rom_type = rom_type.toLowerCase();
    }
    if (checkForInvalidFields(req, fields) === true) {
      return res
        .status(406)
        .json({ success: false, message: 'Body contains invalid fields.' });
    }
    const rom = await Rom.getRomById(id);
    if (rom.user_id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: `You cannot patch this user's ROM.`
      });
    }
    const query = { $set: req.body };
    await Rom.patchRom(id, query);
    clearCache(req, routesWithParams);
    const patchedRom = await Rom.getRomById(id);
    return res.status(200).json(patchedRom);
  } catch (err) {
    switch (err.name) {
      case 'CastError':
        return res
          .status(404)
          .json({ success: false, message: 'ROM not found.' });
      case 'ValidationError':
        return res
          .status(406)
          .json({ success: false, message: 'Request body is invalid.' });
      case 'MongoError':
        return res.status(406).json({
          success: false,
          message: 'Document failed database validation.'
        });
      default:
        return res
          .status(500)
          .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.deleteRom = async (req, res) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const rom = await Rom.getRomById(id);
    if (!rom) {
      return res.status(404).json({
        success: false,
        message: 'ROM not found.'
      });
    }
    if (rom.user_id.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: `You cannot delete this user's ROM.`
      });
    }
    clearCache(req, routesWithParams);
    await Rom.deleteRom(id);
    return res.status(200).json({
      success: true,
      message: 'ROM successfully deleted!'
    });
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    } else {
      return res
        .status(500)
        .json({ success: false, message: 'Internal server error.' });
    }
  }
};

module.exports.deleteRoms = async (req, res) => {
  try {
    const deleteCore = req.query['core'];
    const deleteHacks = req.query['hacks'];
    let query = {};
    let message = '';
    if (convertToBoolean(deleteCore) && !convertToBoolean(deleteHacks)) {
      query = { user_id: req.user._id, rom_type: 'core' };
      message = 'All core ROMs have been deleted.';
    } else if (convertToBoolean(deleteHacks) && !convertToBoolean(deleteCore)) {
      query = { user_id: req.user._id, rom_type: 'hack' };
      message = 'All ROM hacks have been deleted.';
    } else {
      query = { user_id: req.user._id };
      message = 'All ROMs successfully deleted!';
    }
    clearCache(req, routesWithParams);
    await Rom.deleteAllRoms(query);
    return res.status(200).json({
      success: true,
      message
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.romsHeaders = (req, res) => {
  res.status(200);
};

module.exports.romHeaders = async (req, res) => {
  try {
    const id = req.params.id;
    if (checkForInvalidRoute(routesWithParams, id) === true) {
      return res
        .status(405)
        .json({ success: false, message: 'Method not allowed.' });
    }
    const rom = await Rom.getRomById(id);
    if (!rom) {
      return res.status(404).json({
        success: false,
        message: 'ROM not found.'
      });
    }
    return res.status(200);
  } catch (err) {
    if (err.name === 'CastError') {
      return res
        .status(404)
        .json({ success: false, message: 'ROM not found.' });
    }
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.romsOptions = (req, res) => {
  res.status(204);
};

module.exports.coreRoms = async (req, res) => {
  try {
    clearCache(req);
    await Rom.postCore(coreRoms, req.user);
    const query = { user_id: req.user._id };
    const roms = await Rom.getAllRoms(query);
    return res.status(200).json(roms);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.romHacks = async (req, res) => {
  try {
    clearCache(req);
    await Rom.postHacks(romHacks, req.user);
    const query = { user_id: req.user._id };
    const roms = await Rom.getAllRoms(query);
    return res.status(200).json(roms);
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.' });
  }
};

module.exports.all = (req, res, next) => {
  const verbs = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];
  return universal(req, res, next, verbs);
};
