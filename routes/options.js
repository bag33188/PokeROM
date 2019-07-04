const express = require('express');
const router = express.Router();

// get backend options
/**
 * @summary Get backend options.
 * @description Gets supported options for entire backend.
 */
router.options('/', (req, res) => {
  res.status(204);
});

module.exports = router;
