const express = require('express');
const router = express.Router();
const questionController = require('../controller/questions-controller');
const options = require('./options')

router.post('/create', questionController.create);

router.get('/:id', questionController.getquestion);

router.use('/:id/options', options);

router.post('/:id/delete', questionController.delete);

router.get('/:id', questionController.getquestion)




module.exports = router;