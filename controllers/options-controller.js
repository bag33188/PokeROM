/**
 * @function
 * @name options
 * @description Options request.
 * @param {{}} req
 * @param {{}} res
 * @returns {void} Nothing (no content).
 */
module.exports.options = (req, res) => {
  res.status(204);
};

/**
 * @function
 * @name all
 * @description All methods.
 * @param {{}} req The request object.
 * @param {{}} res The response object.
 * @returns {*|Format|Promise<any>} An error JSON response.
 */
module.exports.all = (req, res) => {
  const methods = ['OPTIONS', 'HEAD'];
  if (methods.includes(req.method)) {
    res.set('Allow', methods.join(', '));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
