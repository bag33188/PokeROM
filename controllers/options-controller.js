module.exports.options = (req, res) => {
  res.status(204);
};

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
