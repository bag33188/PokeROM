module.exports = (req, res, verbs) => {
  const httpVerbs = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'HEAD',
    'OPTIONS'
  ];
  const typeErrMsg = 'The verbs argument must be an array of strings.';
  if (!Array.isArray(verbs)) {
    throw new Error(typeErrMsg);
  } else {
    verbs.forEach(verb => {
      if (typeof verb !== 'string') {
        throw new Error(typeErrMsg);
      }
      if (!httpVerbs.includes(verb)) {
        throw new Error(`${verb} is not a valid HTTP verb.`);
      }
    });
  }
  if (verbs.includes(req.method)) {
    const glue = verbs.length > 1 ? ', ' : '';
    res.set('Allow', verbs.join(glue));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
