class ValidatePatchRequest {
  constructor() {
    // this class validates a patch request through middleware usage.
  }

  static sortErrors(errorsArr, propKey) {
    errorsArr.sort((a, b) => {
      if (a[propKey] < b[propKey]) {
        return -1;
      } else if (a[propKey] > b[propKey]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  static validateRomPatch(req, res, next) {
    let errors = [];
    if (req.body.is_favorite !== undefined) {
      if (typeof req.body.is_favorite !== 'boolean') {
        errors.push({
          location: 'body',
          param: 'is_favorite',
          msg: 'is_favorite must be a boolean.'
        });
      }
    }
    if (req.body.order_number !== undefined) {
      if (typeof req.body.order_number !== 'number') {
        errors.push({
          location: 'body',
          param: 'order_number',
          msg: 'Order number must be an integer from 0 to 88.'
        });
      }
      if (
        parseInt(req.body.order_number, 10) &&
        (req.body.order_number > 88 || req.body.order_number < 0)
      ) {
        errors.push({
          location: 'body',
          param: 'order_number',
          msg: 'Order number must be an integer from 0 to 88.'
        });
      }
    }
    if (req.body.rom_type !== undefined) {
      if (typeof req.body.rom_type !== 'string') {
        errors.push({
          location: 'body',
          param: 'rom_type',
          msg: 'ROM type must be a string.'
        });
      }
      if (
        typeof req.body.rom_type === 'string' &&
        (req.body.rom_type.length < 4 || req.body.rom_type > 5)
      ) {
        errors.push({
          location: 'body',
          param: 'rom_type',
          msg: 'ROM type must be in between 4 and 5 characters.'
        });
      }
      if (
        req.body.rom_type.toLowerCase() !== 'core' &&
        req.body.rom_type.toLowerCase() !== 'hack'
      ) {
        errors.push({
          location: 'body',
          param: 'rom_type',
          msg: 'ROM type can only be a core or hack.'
        });
      }
      req.body.rom_type = req.body.rom_type.toLowerCase();
    }
    if (req.body.file_name !== undefined) {
      if (
        typeof req.body.filename === 'string' &&
        (req.body.file_name.length < 3 ||
          req.body.file_name.length > 80 ||
          req.body.file_name === '')
      ) {
        errors.push({
          location: 'body',
          param: 'file_name',
          msg: 'File name must be between 3 and 80 characters.'
        });
      }
      if (typeof req.body.file_name !== 'string') {
        errors.push({
          location: 'body',
          param: 'file_name',
          msg: 'File name must be a string.'
        });
      }
    }
    if (req.body.file_size !== undefined) {
      if (typeof req.body.file_size !== 'number') {
        errors.push({
          location: 'body',
          param: 'file_size',
          msg: 'File size must be a number.'
        });
      }
      if (
        parseInt(req.body.file_size, 10) &&
        (req.body.file_size > 12000000 || req.body.file_size < 64)
      ) {
        errors.push({
          location: 'body',
          param: 'file_size',
          msg: 'File size must be in between 64 and 12000000 kilobytes'
        });
      }
    }
    if (req.body.file_type !== undefined) {
      if (typeof req.body.file_type !== 'string') {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File Type must be a string.'
        });
      }
      if (!/^[a-zA-Z0-9]*$/.test(req.body.file_type)) {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File type must be alphanumeric.'
        });
      }
      if (
        typeof req.body.file_type === 'string' &&
        (req.body.file_type.length < 2 || req.body.file_type.length > 3)
      ) {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File type must be in between 2 and 3 characters.'
        });
      }
      if (/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i.test(req.body.file_type)) {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'Invalid file type extension.'
        });
      }
      if (typeof req.body.file_type !== 'string') {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File name must be a string.'
        });
      }
    }
    if (req.body.download_link !== undefined) {
      if (typeof req.body.download_link !== 'string') {
        errors.push({
          location: 'body',
          param: 'download_link',
          msg: 'Download link must be a string'
        });
      }
      if (
        !/^(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          req.body.download_link
        )
      ) {
        errors.push({
          location: 'body',
          param: 'download_link',
          msg: 'Invalid URL.'
        });
      }
    }
    if (req.body.generation !== undefined) {
      if (typeof req.body.generation !== 'number') {
        errors.push({
          location: 'body',
          param: 'generation',
          msg: 'Generation must be a number.'
        });
      }
      if (
        parseInt(req.body.generation, 10) &&
        (req.body.generation > 8 || req.body.generation < 1)
      ) {
        errors.push({
          location: 'body',
          param: 'generation',
          msg: 'Generation must be in between 1 and 8'
        });
      }
    }
    if (req.body.box_art_url !== undefined) {
      if (typeof req.body.box_art_url !== 'string') {
        errors.push({
          location: 'body',
          param: 'box_art_url',
          msg: 'Box art URL must be a string'
        });
      }
      if (
        !/^(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          req.body.box_art_url
        )
      ) {
        errors.push({
          location: 'body',
          param: 'box_art_url',
          msg: 'Invalid URL.'
        });
      }
    }
    if (req.body.game_name !== undefined) {
      if (typeof req.body.game_name !== 'string') {
        errors.push({
          location: 'body',
          param: 'game_name',
          msg: 'Game name must be a string.'
        });
      }
      if (
        typeof req.body.game_name === 'string' &&
        (req.body.game_name.length < 2 || req.body.game_name.length > 56)
      ) {
        errors.push({
          location: 'body',
          param: 'game_name',
          msg: 'Game name must be in between 2 and 56 characters..'
        });
      }
    }
    if (req.body.region !== undefined) {
      if (!/^[a-zA-Z]$/.test(req.body.region)) {
        errors.push({
          location: 'body',
          param: 'region',
          msg: 'Region must only contain alpha characters.'
        });
      }
      if (
        typeof req.body.region === 'string' &&
        (req.body.region.length < 3 || req.body.region > 10)
      ) {
        errors.push({
          location: 'body',
          param: 'region',
          msg: 'Region must be between 3 and 10 characters.'
        });
      }
    }
    if (req.body.platform !== undefined) {
      if (typeof req.body.platform !== 'string') {
        errors.push({
          location: 'body',
          param: 'platform',
          msg: 'Platform must be a string.'
        });
      }
      if (
        typeof req.body.platform === 'string' &&
        (req.body.platform.length < 2 || req.body.platform > 50)
      ) {
        errors.push({
          location: 'body',
          param: 'platform',
          msg: 'Platform must be between 2 and 50 characters.'
        });
      }
    }
    if (req.body.genre !== undefined) {
      if (typeof req.body.genre !== 'string') {
        errors.push({
          location: 'body',
          param: 'genre',
          msg: 'Genre must be a string.'
        });
      }
      if (
        typeof req.body.genre === 'string' &&
        (req.body.genre.length > 20 && req.body.genre.length < 2)
      ) {
        errors.push({
          location: 'body',
          param: 'genre',
          msg: 'Genre must be in between 2 and 20 characters.'
        });
      }
    }
    if (req.body.logo_url !== undefined) {
      if (typeof req.body.logo_url !== 'string') {
        errors.push({
          location: 'body',
          param: 'logo_url',
          msg: 'Logo URL must be a string.'
        });
      }
      if (
        !/^(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          req.body.logo_url
        )
      ) {
        errors.push({
          location: 'body',
          param: 'logo_url',
          msg: 'Invalid URL.'
        });
      }
    }
    if (req.body.date_released !== undefined) {
      if (typeof req.body.date_released !== 'string') {
        errors.push({
          location: 'body',
          param: 'date_released',
          msg: 'Date released must be a string'
        });
      }
      if (
        !/^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/.test(
          req.body.date_released
        )
      ) {
        errors.push({
          location: 'body',
          param: 'date_released',
          msg: 'Invalid Date; must be in the format of MM/DD/YYYY.'
        });
      }
    }
    if (req.body.description !== undefined) {
      if (typeof req.body.description !== 'string') {
        errors.push({
          location: 'body',
          param: 'description',
          msg: 'Description must be a string.'
        });
      }
      if (
        typeof req.body.description === 'string' &&
        (req.body.description.length < 5 || req.body.description.length > 8000)
      ) {
        errors.push({
          location: 'body',
          param: 'description',
          msg: 'Description must be between 5 and 8000 characters.'
        });
      }
    }
    ValidatePatchRequest.sortErrors(errors, 'param');
    if (errors.length > 0) {
      return res.status(406).json({ success: false, errors });
    }
    next();
  }

  static validateNaturePatch(req, res, next) {
    let errors = [];
    if (req.body.usage !== undefined) {
      if (typeof req.body.usage !== 'string') {
        errors.push({
          location: 'body',
          param: 'usage',
          msg: 'Usage must be a string.'
        });
      }
      if (
        typeof req.body.usage === 'string' &&
        (req.body.usage.length < 5 || req.body.usage.length > 50)
      ) {
        errors.push({
          location: 'body',
          param: 'usage',
          msg:
            'The usage for the nature must be in between 5 and 40 characters.'
        });
      }
    }
    if (req.body.flavor !== undefined) {
      if (typeof req.body.flavor !== 'string') {
        errors.push({
          location: 'body',
          param: 'flavor',
          msg: 'Flavor must be a string.'
        });
      }
      if (
        typeof req.body.flavor === 'string' &&
        (req.body.flavor.length > 14 && req.body.flavor.length < 4)
      ) {
        errors.push({
          location: 'body',
          param: 'flavor',
          msg: 'The flavor for the nature must be less than 14 characters.'
        });
      }
    }
    if (req.body.down !== undefined) {
      if (typeof req.body.down !== 'string') {
        errors.push({
          location: 'body',
          param: 'down',
          msg: 'Down must be a string.'
        });
      }
      if (
        typeof req.body.down === 'string' &&
        (req.body.down.length < 4 || req.body.down.length > 20)
      ) {
        errors.push({
          location: 'body',
          param: 'down',
          msg:
            'The decreased stat of the nature must be between 4 and 20 characters.'
        });
      }
    }
    if (req.body.up !== undefined) {
      if (typeof req.body.up !== 'string') {
        errors.push({
          location: 'body',
          param: 'up',
          msg: 'Up must be a string.'
        });
      }
      if (
        typeof req.body.up === 'string' &&
        (req.body.up.length < 4 || req.body.up.length > 20)
      ) {
        errors.push({
          location: 'body',
          param: 'up',
          msg:
            'The increased stat of the nature must be between 4 and 20 characters.'
        });
      }
    }
    if (req.body.name !== undefined) {
      if (typeof req.body.name !== 'string') {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name of Nature must be a string.'
        });
      }
      if (req.body.name.length < 3 || req.body.name.length > 20) {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name of Nature must be between 3 and 20 characters.'
        });
      }
    }
    ValidatePatchRequest.sortErrors(errors, 'param');
    if (errors.length > 0) {
      return res.status(406).json({ success: false, errors });
    }
    next();
  }

  static validateUserPatch(req, res, next) {
    let errors = [];
    if (req.body.password !== undefined) {
      if (typeof req.body.password !== 'string') {
        errors.push({
          location: 'body',
          param: 'password',
          msg: 'Password must be a string.'
        });
      }
      if (
        typeof req.body.password === 'string' &&
        (req.body.password.length < 8 || req.body.password.length > 256)
      ) {
        errors.push({
          location: 'body',
          param: 'password',
          msg: 'Password must be between 8 and 256 characters.'
        });
      }
      if (
        /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi.test(
          req.body.password
        )
      ) {
        errors.push({
          location: 'body',
          param: 'password',
          msg: 'Password contains invalid characters.'
        });
      }
    }
    if (req.body.username !== undefined) {
      if (typeof req.body.username !== 'string') {
        errors.push({
          location: 'body',
          param: 'username',
          msg: 'Username must be a string.'
        });
      }
      if (!/^(?:([A-Za-z0-9_])*)$/.test(req.body.username)) {
        errors.push({
          location: 'body',
          param: 'username',
          msg: 'Username can only contain letters, numbers, or underscores.'
        });
      }
      if (
        typeof req.body.username === 'string' &&
        (req.body.username.length < 5 || req.body.username > 22)
      ) {
        errors.push({
          location: 'body',
          param: 'username',
          msg: 'Username must be between 5 and 22 characters.'
        });
      }
    }
    if (req.body.name !== undefined) {
      if (typeof req.body.name !== 'string') {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name must be a string.'
        });
      }
      if (
        typeof req.body.name === 'string' &&
        (req.body.name.length < 1 || req.body.name.length > 100)
      ) {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name must be in between 1 and 100 characters.'
        });
      }
    }
    ValidatePatchRequest.sortErrors(errors, 'param');
    if (errors.length > 0) {
      return res.status(406).json({ success: false, errors });
    }
    next();
  }
}

module.exports = ValidatePatchRequest;
