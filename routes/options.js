const express = require('express');
const options_controller = require('../controllers/OptionsController');

const httpRouter = express.Router();

// get backend options
httpRouter.options('/', options_controller.options);

httpRouter.all('/*', options_controller.all);

module.exports = httpRouter;
