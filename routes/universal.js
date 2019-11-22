module.exports = (req, res, methods) => {
  if (methods.includes(req.method)) {
    const glue = methods.length > 1 ? ', ' : '';
    res.set('Allow', methods.join(glue));
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed.' });
  } else {
    return res
      .status(501)
      .json({ success: false, message: 'Method not implemented.' });
  }
};
