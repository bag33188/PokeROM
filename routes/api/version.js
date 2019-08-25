const express = require('express');
const version_controller = require('../../controllers/VersionController');

const httpRouter = express.Router();

// get api version
httpRouter.get('/', version_controller.getVersion);

httpRouter.all('/*', version_controller.all);

// export httpRouter
module.exports = httpRouter;
