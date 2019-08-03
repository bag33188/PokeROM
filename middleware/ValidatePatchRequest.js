class ValidatePatchRequest {
  constructor(req) {
    this.req = req;
  }

  validateRomPatch(res) {
    if (this.req.body.orderNumber) {
      if (!parseInt(this.req.body.orderNumber, 10)) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Order number must be an integer from 0 to 88.'
          });
      }
      if (
        parseInt(this.req.body.orderNumber, 10) &&
        (this.req.body.orderNumber > 88 || this.req.body.orderNumber < 0)
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Order number must be an integer from 0 to 88.'
          });
      }
    }
    if (this.req.body.romType) {
      if (typeof this.req.body.romType !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'ROM type must be a string.' });
      }
      if (this.req.body.romType.length < 4 || this.req.body.romType > 5) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'ROM type must be in between 4 and 5 characters.'
          });
      }
      if (
        this.req.body.romType.toLowerCase() !== 'core' &&
        this.req.body.romType.toLowerCase() !== 'hack'
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'ROM type can only be a core or hack.'
          });
      }
      this.req.body.romType = this.req.body.romType.toLowerCase();
    }
    if (this.req.body.fileName || this.req.body.fileName === '') {
      if (
        this.req.body.fileName.length < 3 ||
        this.req.body.fileName.length > 80 ||
        this.req.body.fileName === ''
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'File name must be between 3 and 80 characters.'
          });
      }
      if (typeof this.req.body.fileName !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'File name must be a string.' });
      }
    }
    if (this.req.body.fileSize) {
      if (!parseInt(this.req.body.fileSize, 10)) {
        return res
          .status(406)
          .json({ success: false, message: 'File size must be a number.' });
      }
      if (
        parseInt(this.req.body.fileSize, 10) &&
        (this.req.body.fileSize > 12000000 || this.req.body.fileSize < 64)
      ) {
        return res.status(406).json({
          success: false,
          message: 'File size must be in between 64 and 12000000 kilobytes'
        });
      }
    }
    if (this.req.body.fileType || this.req.body.fileType === '') {
      if (!/^[a-zA-Z0-9]*$/.test(this.req.body.fileType)) {
        return res
          .status(406)
          .json({ success: false, message: 'File type must be alphanumeric.' });
      }
      if (
        this.req.body.fileType.length < 2 ||
        this.req.body.fileType.length > 3
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'File type must be in between 2 and 3 characters.'
          });
      }
      if (/^(?:\.?(gb[ca]?|[n3]ds|xci))$/i.test(this.req.body.fileType)) {
        return res
          .status(406)
          .json({ success: false, message: 'Invalid file type extension.' });
      }
      if (typeof this.req.body.fileName !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'File name must be a string.' });
      }
    }
    if (this.req.body.downloadLink || this.req.body.downloadLink === '') {
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.downloadLink
        )
      ) {
        return res
          .status(406)
          .json({ success: false, message: 'Invalid URL.' });
      }
    }
    if (this.req.body.generation) {
      if (!parseInt(this.req.body.generation, 10)) {
        return res
          .status(406)
          .json({ success: false, message: 'Generation must be a number.' });
      }
      if (
        parseInt(this.req.body.generation, 10) &&
        (this.req.body.generation > 8 || this.req.body.generation < 1)
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Generation must be in between 1 and 8'
          });
      }
    }
    if (this.req.body.boxArtUrl || this.req.body.boxArtUrl === '') {
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.boxArtUrl
        )
      ) {
        return res
          .status(406)
          .json({ success: false, message: 'Invalid URL.' });
      }
    }
    if (this.req.body.gameName || this.req.body.gameName === '') {
      if (typeof this.req.body.gameName !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Game name must be a string.' });
      }
      if (
        this.req.body.gameName.length < 2 ||
        this.req.body.gameName.length > 56
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Game name must be in between 2 and 56 characters..'
          });
      }
    }
    if (this.req.body.region || this.req.body.region === '') {
      if (!/^[a-zA-Z]$/.test(this.req.body.region)) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Region must only contain alpha characters.'
          });
      }
      if (this.req.body.region.length < 3 || this.req.body.region > 10) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Region must be between 3 and 10 characters.'
          });
      }
    }
    if (this.req.body.platform || this.req.body.platform === '') {
      if (typeof this.req.body.platform !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Platform must be a string.' });
      }
      if (this.req.body.platform.length < 2 || this.req.body.platform > 50) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Platform must be between 2 and 50 characters.'
          });
      }
    }
    if (this.req.body.genre || this.req.body.genre === '') {
      if (typeof this.req.body.genre !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Genre must be a string.' });
      }
      if (this.req.body.genre.length > 20) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Genre must be less than 20 characters.'
          });
      }
    }
    if (this.req.body.logoUrl || this.req.body.logoUrl === '') {
      if (
        !/^(?:[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#;=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=;]*))$/i.test(
          this.req.body.logoUrl
        )
      ) {
        return res
          .status(406)
          .json({ success: false, message: 'Invalid URL.' });
      }
    }
    if (this.req.body.dateReleased || this.req.body.dateReleased === '') {
      if (
        !/^(?:(0[1-9]|1[012])(\/|(&#x2[Ff];))(0[1-9]|[12][0-9]|3[01])(\/|(&#x2[Ff];))(\d{4}))$/.test(
          this.req.body.dateReleased
        )
      ) {
        return res
          .status(406)
          .json({ success: false, message: 'Invalid Date; must be in the format of MM/DD/YYYY.' });
      }
    }
    if (this.req.body.description || this.req.body.description === '') {
      if (typeof this.req.body.description !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Description must be a string.' });
      }
      if (
        this.req.body.description.length < 5 ||
        this.req.body.description.length > 8000
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Description must be between 5 and 8000 characters.'
          });
      }
    }
  }

  validateNaturePatch(res) {
    if (this.req.body.usage || this.req.body.usage === '') {
      if (typeof this.req.body.usage !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Usage must be a string.' });
      }
      if (this.req.body.usage.length < 5 || this.req.body.usage.length > 50) {
        return res
          .status(406)
          .json({
            success: false,
            message:
              'The usage for the nature must be in between 5 and 40 characters.'
          });
      }
    }
    if (this.req.body.flavor || this.req.body.flavor === '') {
      if (typeof this.req.body.flavor !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'flavor must be a string.' });
      }
      if (this.req.body.usage.flavor > 14) {
        return res
          .status(406)
          .json({
            success: false,
            message:
              'The flavor for the nature must be greater than 14 characters.'
          });
      }
    }
    if (this.req.body.down || this.req.body.down === '') {
      if (typeof this.req.body.down !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Down must be a string.' });
      }
      if (this.req.body.down.length < 4 || this.req.body.down.length > 20) {
        return res
          .status(406)
          .json({
            success: false,
            message:
              'The decreased stat of the nature must be between 4 and 20 characters.'
          });
      }
    }
    if (this.req.body.up || this.req.body.up === '') {
      if (typeof this.req.body.up !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Up must be a string.' });
      }
      if (this.req.body.up.length < 4 || this.req.body.up.length > 20) {
        return res
          .status(406)
          .json({
            success: false,
            message:
              'The increased stat of the nature must be between 4 and 20 characters.'
          });
      }
    }
    if (this.req.body.name || this.req.body.name === '') {
      if (typeof this.req.body.name !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Name must be a string.' });
      }
      if (this.req.body.up.length < 3 || this.req.body.up.length > 20) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Name must be between 3 and 20 characters.'
          });
      }
    }
  }

  validateUserPatch(res) {
    if (this.req.body.password || this.req.body.password === '') {
      if (typeof this.req.body.password !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Password must be a string.' });
      }
      if (this.req.body.password.length < 8 || this.req.body.password.length > 256) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Password must be between 8 and 256 characters.'
          });
      }
      if (
        /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi.test(
          this.req.body.password
        )
      ) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Password contains invalid characters.'
          });
      }
    }
    if (this.req.body.username || this.req.body.username === '') {
      if (typeof this.req.body.username !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Username must be a string.' });
      }
      if (!/^(?:([A-Za-z0-9_])*)$/.test(this.req.body.username)) {
        return res
          .status(406)
          .json({
            success: false,
            message:
              'Username can only contain letters, numbers, or underscores.'
          });
      }
      if (this.req.body.username.length < 5 || this.req.body.username > 22) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Username must be between 5 and 22 characters.'
          });
      }
    }
    if (this.req.body.email || this.req.body.email === '') {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.req.body.email
        )
      ) {
        return res
          .status(406)
          .json({ success: false, message: 'Invalid email.' });
      }
    }
    if (this.req.body.name || this.req.body.name === '') {
      if (typeof this.req.body.name !== typeof 'string') {
        return res
          .status(406)
          .json({ success: false, message: 'Name must be a string.' });
      }
      if (this.req.body.name.length > 100) {
        return res
          .status(406)
          .json({
            success: false,
            message: 'Name can only be 100 characters at max.'
          });
      }
    }
  }
}

module.exports = ValidatePatchRequest;
