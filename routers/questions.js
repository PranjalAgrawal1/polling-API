const express = require('express');
const router = express.Router();
const pollingController = require('../controller/questions-controller');
const options = require('./options')

router.post('/create', pollingController.create);

router.get('/:id', pollingController.getquestion)

router.use('/:id/options', options);





module.exports = router;