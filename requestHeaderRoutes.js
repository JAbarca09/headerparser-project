const express = require('express');
const requestHeaderParserController = require('./requestHeaderController');
const router = express.Router();

router.get('/whoami', requestHeaderParserController.getHeaders);

module.exports = router;