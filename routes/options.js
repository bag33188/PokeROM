const express = require('express');
const OptionsController = require('../controllers/option-controller');

const router = express.Router();

// get backend options
router.options('/', OptionsController.options);

router.all('/*', OptionsController.all);

module.exports = router;
