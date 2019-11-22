const express = require('express');
const OptionsController = require('../controllers/options-controller');

const router = express.Router();

// get backend options
router.options('/', OptionsController.options);

router.all('/*', OptionsController.all);

module.exports = router;
