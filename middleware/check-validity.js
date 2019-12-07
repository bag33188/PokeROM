const pwdRegex = /(((?:(<\/?[\s\S]*?>)|(javascript:(?:[^:\s]?)+))|[\\/"'<>&])|[\\/"'<>&])/gi;

module.exports = {
  checkForInvalidFields(req, fields, checkUser) {
    let invalidFields = false;
    for (const field of Object.keys(req.body)) {
      if (!fields.includes(field)) {
        invalidFields = true;
        break;
      } else {
        invalidFields =
          checkUser === true
            ? field === 'password' && pwdRegex.test(req.body[field])
            : false;
        if (typeof req.body[field] === 'string') {
          req.body[field] = req.sanitize(req.body[field]);
        }
      }
    }
    return invalidFields;
  },
  checkForInvalidRoute: (routesWithParams, id) => routesWithParams.includes(id)
};
