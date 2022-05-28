const express = require('express');
const router = express.Router();
const optionController = require('../controller/option-controller');

// router.post')

router.post('/create', optionController.create);

module.exports = router;