const pwdRegex = /(?:(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>))|[\\/"'<>&])/gi;

module.exports = {
  checkForInvalidFields(req, fields, checkUser) {
    let invalidFields = false;
    for (const field of Object.keys(req.body)) {
      if (!fields.includes(field)) {
        invalidFields = true;
        break;
      } else {
        if (checkUser === true) {
          invalidFields =
            field === 'password' && pwdRegex.test(req.body[field]);
        } else {
          invalidFields = false;
        }
        if (typeof req.body[field] === 'string') {
          req.body[field] = req.sanitize(req.body[field]);
        }
      }
    }
    return invalidFields;
  },
  checkForInvalidRoute(routesWithParams, id) {
    return routesWithParams.includes(id);
  }
};
