const express = require('express');
const OptionsController = require('../controllers/options-controller');

const httpRouter = express.Router();

// get backend options
httpRouter.options('/', OptionsController.options);

httpRouter.all('/*', OptionsController.all);

module.exports = httpRouter;
