const express = require('express');
const VersionController = require('../../controllers/version-controller');

const httpRouter = express.Router();

// get api version
httpRouter.get('/', VersionController.getVersion);

httpRouter.all('/*', VersionController.all);

// export httpRouter
module.exports = httpRouter;
