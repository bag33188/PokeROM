const express = require('express');
const router = express.Router();

// get backend options
/**
 * @summary Get backend options.
 * @description Gets supported options for entire backend.
 */
router.options('/', async (req, res, next) => {
  try {
    await res.status(204);
  } catch (err) {
    next(err);
  }
});
router.all('/*', async (req, res) => {
  res.set('Allow', 'OPTIONS');
  await res.status(405).json({success: false, msg: 'Method not allowed.'});
});

module.exports = router;
