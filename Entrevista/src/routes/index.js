var express = require('express');
var router = express.Router();
const mainController = require('../Controllers/mainControllers');

router.get('/', mainController.index);

module.exports = router;
