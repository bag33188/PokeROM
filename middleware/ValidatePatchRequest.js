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
    if (this.req.body.orderNumber !== undefined) {
      if (typeof this.req.body.orderNumber !== 'number') {
        errors.push({
          location: 'body',
          param: 'orderNumber',
          msg: 'Order number must be an integer from 0 to 88.'
        });
      }
      if (
        parseInt(this.req.body.orderNumber, 10) &&
        (this.req.body.orderNumber > 88 || this.req.body.orderNumber < 0)
      ) {
        errors.push({
          location: 'body',
          param: 'orderNumber',
          msg: 'Order number must be an integer from 0 to 88.'
        });
      }
    }
    if (this.req.body.romType !== undefined) {
      if (typeof this.req.body.romType !== 'string') {
        errors.push({
          location: 'body',
          param: 'romType',
          msg: 'ROM type must be a string.'
        });
      }
      if (
        typeof this.req.body.romType === 'string' &&
        (this.req.body.romType.length < 4 || this.req.body.romType > 5)
      ) {
        errors.push({
          location: 'body',
          param: 'romType',
          msg: 'ROM type must be in between 4 and 5 characters.'
        });
      }
      if (
        this.req.body.romType.toLowerCase() !== 'core' &&
        this.req.body.romType.toLowerCase() !== 'hack'
      ) {
        errors.push({
          location: 'body',
          param: 'romType',
          msg: 'ROM type can only be a core or hack.'
        });
      }
      this.req.body.romType = this.req.body.romType.toLowerCase();
    }
    if (this.req.body.fileName !== undefined) {
      if (
        typeof this.req.body.filename === 'string' &&
        (this.req.body.fileName.length < 3 ||
          this.req.body.fileName.length > 80 ||
          this.req.body.fileName === '')
      ) {
        errors.push({
          location: 'body',
          param: 'fileName',
          msg: 'File name must be between 3 and 80 characters.'
        });
      }
      if (typeof this.req.body.fileName !== 'string') {
        errors.push({
          location: 'body',
          param: 'fileName',
          msg: 'File name must be a string.'
        });
      }
    }
    if (this.req.body.fileSize !== undefined) {
      if (typeof this.req.body.fileSize !== 'number') {
        errors.push({
          location: 'body',
          param: 'fileSize',
          msg: 'File size must be a number.'
        });
      }
      if (
        parseInt(this.req.body.fileSize, 10) &&
        (this.req.body.fileSize > 12000000 || this.req.body.fileSize < 64)
      ) {
        errors.push({
          location: 'body',
          param: 'fileSize',
          msg: 'File size must be in between 64 and 12000000 kilobytes'
        });
      }
    }
    if (this.req.body.fileType !== undefined) {
      if (typeof this.req.body.fileType !== 'string') {
        errors.push({
          location: 'body',
          param: 'fileType',
          msg: 'File Type must be a string.'
        });
      }
      if (!/^[a-zA-Z0-9]*$/.test(this.req.body.fileType)) {
        errors.push({
          location: 'body',
          param: 'fileType',
          msg: 'File type must be alphanumeric.'
        });
      }
      if (
        typeof this.req.body.fileType === 'string' &&
        (this.req.body.fileType.length < 2 || this.req.body.fileType.length > 3)
      ) {
        errors.push({
          location: 'body',
          param: 'fileType',
          msg: 'File type must be in between 2 and 3 characters.'
        });
      }
      if (/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i.test(this.req.body.fileType)) {
        errors.push({
          location: 'body',
          param: 'fileType',
          msg: 'Invalid file type extension.'
        });
      }
      if (typeof this.req.body.fileType !== 'string') {
        errors.push({
          location: 'body',
          param: 'fileType',
          msg: 'File name must be a string.'
        });
      }
    }
    if (this.req.body.downloadLink !== undefined) {
      if (typeof this.req.body.downloadLink !== 'string') {
        errors.push({
          location: 'body',
          param: 'downloadLink',
          msg: 'Download link must be a string'
        });
      }
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.downloadLink
        )
      ) {
        errors.push({
          location: 'body',
          param: 'downloadLink',
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
    if (this.req.body.boxArtUrl !== undefined) {
      if (typeof this.req.body.boxArtUrl !== 'string') {
        errors.push({
          location: 'body',
          param: 'boxArtUrl',
          msg: 'Box art URL must be a string'
        });
      }
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.boxArtUrl
        )
      ) {
        errors.push({
          location: 'body',
          param: 'boxArtUrl',
          msg: 'Invalid URL.'
        });
      }
    }
    if (this.req.body.gameName !== undefined) {
      if (typeof this.req.body.gameName !== 'string') {
        errors.push({
          location: 'body',
          param: 'gameName',
          msg: 'Game name must be a string.'
        });
      }
      if (
        typeof this.req.body.gameName === 'string' &&
        (this.req.body.gameName.length < 2 ||
          this.req.body.gameName.length > 56)
      ) {
        errors.push({
          location: 'body',
          param: 'gameName',
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
    if (this.req.body.logoUrl !== undefined) {
      if (typeof this.req.body.logoUrl !== 'string') {
        errors.push({
          location: 'body',
          param: 'logoUrl',
          msg: 'Logo URL must be a string.'
        });
      }
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.logoUrl
        )
      ) {
        errors.push({
          location: 'body',
          param: 'logoUrl',
          msg: 'Invalid URL.'
        });
      }
    }
    if (this.req.body.dateReleased !== undefined) {
      if (typeof this.req.body.dateReleased !== 'string') {
        errors.push({
          location: 'body',
          param: 'dateReleased',
          msg: 'Date released must be a string'
        });
      }
      if (
        !/^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/.test(
          this.req.body.dateReleased
        )
      ) {
        errors.push({
          location: 'body',
          param: 'dateReleased',
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
