class ValidatePatchRequest {
  constructor(req) {
    this.req = req;
  }

  sortErrors(errorsArr, propKey) {
    errorsArr.sort(function(a, b) {
      if (a[propKey] < b[propKey]) {
        return -1;
      } else if (a[propKey] > b[propKey]) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  validateRomPatch(res) {
    let errors = [];
    if (this.req.body.is_favorite !== undefined) {
      if (typeof this.req.body.is_favorite !== 'boolean') {
        errors.push({
          location: 'body',
          param: 'is_favorite',
          msg: 'is_favorite must be a boolean.'
        });
      }
    }
    if (this.req.body.order_number !== undefined) {
      if (typeof this.req.body.order_number !== 'number') {
        errors.push({
          location: 'body',
          param: 'order_number',
          msg: 'Order number must be an integer from 0 to 88.'
        });
      }
      if (
        parseInt(this.req.body.order_number, 10) &&
        (this.req.body.order_number > 88 || this.req.body.order_number < 0)
      ) {
        errors.push({
          location: 'body',
          param: 'order_number',
          msg: 'Order number must be an integer from 0 to 88.'
        });
      }
    }
    if (this.req.body.rom_type !== undefined) {
      if (typeof this.req.body.rom_type !== 'string') {
        errors.push({
          location: 'body',
          param: 'rom_type',
          msg: 'ROM type must be a string.'
        });
      }
      if (
        typeof this.req.body.rom_type === 'string' &&
        (this.req.body.rom_type.length < 4 || this.req.body.rom_type > 5)
      ) {
        errors.push({
          location: 'body',
          param: 'rom_type',
          msg: 'ROM type must be in between 4 and 5 characters.'
        });
      }
      if (
        this.req.body.rom_type.toLowerCase() !== 'core' &&
        this.req.body.rom_type.toLowerCase() !== 'hack'
      ) {
        errors.push({
          location: 'body',
          param: 'rom_type',
          msg: 'ROM type can only be a core or hack.'
        });
      }
      this.req.body.rom_type = this.req.body.rom_type.toLowerCase();
    }
    if (this.req.body.file_name !== undefined) {
      if (
        typeof this.req.body.filename === 'string' &&
        (this.req.body.file_name.length < 3 ||
          this.req.body.file_name.length > 80 ||
          this.req.body.file_name === '')
      ) {
        errors.push({
          location: 'body',
          param: 'file_name',
          msg: 'File name must be between 3 and 80 characters.'
        });
      }
      if (typeof this.req.body.file_name !== 'string') {
        errors.push({
          location: 'body',
          param: 'file_name',
          msg: 'File name must be a string.'
        });
      }
    }
    if (this.req.body.file_size !== undefined) {
      if (typeof this.req.body.file_size !== 'number') {
        errors.push({
          location: 'body',
          param: 'file_size',
          msg: 'File size must be a number.'
        });
      }
      if (
        parseInt(this.req.body.file_size, 10) &&
        (this.req.body.file_size > 12000000 || this.req.body.file_size < 64)
      ) {
        errors.push({
          location: 'body',
          param: 'file_size',
          msg: 'File size must be in between 64 and 12000000 kilobytes'
        });
      }
    }
    if (this.req.body.file_type !== undefined) {
      if (typeof this.req.body.file_type !== 'string') {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File Type must be a string.'
        });
      }
      if (!/^[a-zA-Z0-9]*$/.test(this.req.body.file_type)) {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File type must be alphanumeric.'
        });
      }
      if (
        typeof this.req.body.file_type === 'string' &&
        (this.req.body.file_type.length < 2 || this.req.body.file_type.length > 3)
      ) {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File type must be in between 2 and 3 characters.'
        });
      }
      if (/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i.test(this.req.body.file_type)) {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'Invalid file type extension.'
        });
      }
      if (typeof this.req.body.file_type !== 'string') {
        errors.push({
          location: 'body',
          param: 'file_type',
          msg: 'File name must be a string.'
        });
      }
    }
    if (this.req.body.download_link !== undefined) {
      if (typeof this.req.body.download_link !== 'string') {
        errors.push({
          location: 'body',
          param: 'download_link',
          msg: 'Download link must be a string'
        });
      }
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.download_link
        )
      ) {
        errors.push({
          location: 'body',
          param: 'download_link',
          msg: 'Invalid URL.'
        });
      }
    }
    if (this.req.body.generation !== undefined) {
      if (typeof this.req.body.generation !== 'number') {
        errors.push({
          location: 'body',
          param: 'generation',
          msg: 'Generation must be a number.'
        });
      }
      if (
        parseInt(this.req.body.generation, 10) &&
        (this.req.body.generation > 8 || this.req.body.generation < 1)
      ) {
        errors.push({
          location: 'body',
          param: 'generation',
          msg: 'Generation must be in between 1 and 8'
        });
      }
    }
    if (this.req.body.box_art_url !== undefined) {
      if (typeof this.req.body.box_art_url !== 'string') {
        errors.push({
          location: 'body',
          param: 'box_art_url',
          msg: 'Box art URL must be a string'
        });
      }
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.box_art_url
        )
      ) {
        errors.push({
          location: 'body',
          param: 'box_art_url',
          msg: 'Invalid URL.'
        });
      }
    }
    if (this.req.body.game_name !== undefined) {
      if (typeof this.req.body.game_name !== 'string') {
        errors.push({
          location: 'body',
          param: 'game_name',
          msg: 'Game name must be a string.'
        });
      }
      if (
        typeof this.req.body.game_name === 'string' &&
        (this.req.body.game_name.length < 2 ||
          this.req.body.game_name.length > 56)
      ) {
        errors.push({
          location: 'body',
          param: 'game_name',
          msg: 'Game name must be in between 2 and 56 characters..'
        });
      }
    }
    if (this.req.body.region !== undefined) {
      if (!/^[a-zA-Z]$/.test(this.req.body.region)) {
        errors.push({
          location: 'body',
          param: 'region',
          msg: 'Region must only contain alpha characters.'
        });
      }
      if (
        typeof this.req.body.region === 'string' &&
        (this.req.body.region.length < 3 || this.req.body.region > 10)
      ) {
        errors.push({
          location: 'body',
          param: 'region',
          msg: 'Region must be between 3 and 10 characters.'
        });
      }
    }
    if (this.req.body.platform !== undefined) {
      if (typeof this.req.body.platform !== 'string') {
        errors.push({
          location: 'body',
          param: 'platform',
          msg: 'Platform must be a string.'
        });
      }
      if (
        typeof this.req.body.platform === 'string' &&
        (this.req.body.platform.length < 2 || this.req.body.platform > 50)
      ) {
        errors.push({
          location: 'body',
          param: 'platform',
          msg: 'Platform must be between 2 and 50 characters.'
        });
      }
    }
    if (this.req.body.genre !== undefined) {
      if (typeof this.req.body.genre !== 'string') {
        errors.push({
          location: 'body',
          param: 'genre',
          msg: 'Genre must be a string.'
        });
      }
      if (
        typeof this.req.body.genre &&
        (this.req.body.genre.length > 20 && this.req.body.genre.length < 2)
      ) {
        errors.push({
          location: 'body',
          param: 'genre',
          msg: 'Genre must be in between 2 and 20 characters.'
        });
      }
    }
    if (this.req.body.logo_url !== undefined) {
      if (typeof this.req.body.logo_url !== 'string') {
        errors.push({
          location: 'body',
          param: 'logo_url',
          msg: 'Logo URL must be a string.'
        });
      }
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.logo_url
        )
      ) {
        errors.push({
          location: 'body',
          param: 'logo_url',
          msg: 'Invalid URL.'
        });
      }
    }
    if (this.req.body.date_released !== undefined) {
      if (typeof this.req.body.date_released !== 'string') {
        errors.push({
          location: 'body',
          param: 'date_released',
          msg: 'Date released must be a string'
        });
      }
      if (
        !/^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/.test(
          this.req.body.date_released
        )
      ) {
        errors.push({
          location: 'body',
          param: 'date_released',
          msg: 'Invalid Date; must be in the format of MM/DD/YYYY.'
        });
      }
    }
    if (this.req.body.description !== undefined) {
      if (typeof this.req.body.description !== 'string') {
        errors.push({
          location: 'body',
          param: 'description',
          msg: 'Description must be a string.'
        });
      }
      if (
        typeof this.req.body.description === 'string' &&
        (this.req.body.description.length < 5 ||
          this.req.body.description.length > 8000)
      ) {
        errors.push({
          location: 'body',
          param: 'description',
          msg: 'Description must be between 5 and 8000 characters.'
        });
      }
    }
    this.sortErrors(errors, 'param');
    if (errors.length > 0) {
      return res.status(406).json({ success: false, errors });
    }
  }

  validateNaturePatch(res) {
    let errors = [];
    if (this.req.body.usage !== undefined) {
      if (typeof this.req.body.usage !== 'string') {
        errors.push({
          location: 'body',
          param: 'usage',
          msg: 'Usage must be a string.'
        });
      }
      if (
        typeof this.req.body.usage === 'string' &&
        (this.req.body.usage.length < 5 || this.req.body.usage.length > 50)
      ) {
        errors.push({
          location: 'body',
          param: 'usage',
          msg:
            'The usage for the nature must be in between 5 and 40 characters.'
        });
      }
    }
    if (this.req.body.flavor !== undefined) {
      if (typeof this.req.body.flavor !== 'string') {
        errors.push({
          location: 'body',
          param: 'flavor',
          msg: 'Flavor must be a string.'
        });
      }
      if (
        typeof this.req.body.flavor === 'string' &&
        (this.req.body.flavor.length > 14 && this.req.body.flavor.length < 4)
      ) {
        errors.push({
          location: 'body',
          param: 'flavor',
          msg: 'The flavor for the nature must be less than 14 characters.'
        });
      }
    }
    if (this.req.body.down !== undefined) {
      if (typeof this.req.body.down !== 'string') {
        errors.push({
          location: 'body',
          param: 'down',
          msg: 'Down must be a string.'
        });
      }
      if (
        typeof this.req.body.down === 'string' &&
        (this.req.body.down.length < 4 || this.req.body.down.length > 20)
      ) {
        errors.push({
          location: 'body',
          param: 'down',
          msg:
            'The decreased stat of the nature must be between 4 and 20 characters.'
        });
      }
    }
    if (this.req.body.up !== undefined) {
      if (typeof this.req.body.up !== 'string') {
        errors.push({
          location: 'body',
          param: 'up',
          msg: 'Up must be a string.'
        });
      }
      if (
        typeof this.req.body.up === 'string' &&
        (this.req.body.up.length < 4 || this.req.body.up.length > 20)
      ) {
        errors.push({
          location: 'body',
          param: 'up',
          msg:
            'The increased stat of the nature must be between 4 and 20 characters.'
        });
      }
    }
    if (this.req.body.name !== undefined) {
      if (typeof this.req.body.name !== 'string') {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name of Nature must be a string.'
        });
      }
      if (this.req.body.name.length < 3 || this.req.body.name.length > 20) {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name of Nature must be between 3 and 20 characters.'
        });
      }
    }
    this.sortErrors(errors, 'param');
    if (errors.length > 0) {
      return res.status(406).json({ success: false, errors });
    }
  }

  validateUserPatch(res) {
    let errors = [];
    if (this.req.body.password !== undefined) {
      if (typeof this.req.body.password !== 'string') {
        errors.push({
          location: 'body',
          param: 'password',
          msg: 'Password must be a string.'
        });
      }
      if (
        typeof this.req.body.password === 'string' &&
        (this.req.body.password.length < 8 ||
          this.req.body.password.length > 256)
      ) {
        errors.push({
          location: 'body',
          param: 'password',
          msg: 'Password must be between 8 and 256 characters.'
        });
      }
      if (
        /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi.test(
          this.req.body.password
        )
      ) {
        errors.push({
          location: 'body',
          param: 'password',
          msg: 'Password contains invalid characters.'
        });
      }
    }
    if (this.req.body.username !== undefined) {
      if (typeof this.req.body.username !== 'string') {
        errors.push({
          location: 'body',
          param: 'username',
          msg: 'Username must be a string.'
        });
      }
      if (!/^(?:([A-Za-z0-9_])*)$/.test(this.req.body.username)) {
        errors.push({
          location: 'body',
          param: 'username',
          msg: 'Username can only contain letters, numbers, or underscores.'
        });
      }
      if (
        typeof this.req.body.username === 'string' &&
        (this.req.body.username.length < 5 || this.req.body.username > 22)
      ) {
        errors.push({
          location: 'body',
          param: 'username',
          msg: 'Username must be between 5 and 22 characters.'
        });
      }
    }
    if (this.req.body.email !== undefined) {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.req.body.email
        )
      ) {
        errors.push({
          location: 'body',
          param: 'email',
          msg: 'Invalid email.'
        });
      }
    }
    if (this.req.body.name !== undefined) {
      if (typeof this.req.body.name !== 'string') {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name must be a string.'
        });
      }
      if (
        typeof this.req.body.name === 'string' &&
        (this.req.body.name.length < 1 || this.req.body.name.length > 100)
      ) {
        errors.push({
          location: 'body',
          param: 'name',
          msg: 'Name must be in between 1 and 100 characters.'
        });
      }
    }
    this.sortErrors(errors, 'param');
    if (errors.length > 0) {
      return res.status(406).json({ success: false, errors });
    }
  }
}

module.exports = ValidatePatchRequest;
