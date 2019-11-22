const express = require('express');
const VersionController = require('../../controllers/version-controller');

const router = express.Router();

// get api version
router.get('/', VersionController.getVersion);

router.all('/*', VersionController.all);

// export router
module.exports = router;
