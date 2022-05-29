const express = require('express');
const router = express.Router();
const questionController = require('../controller/questions-controller');
const options = require('./options')

// create question route
router.post('/create', questionController.create);

// get question route
router.get('/:id', questionController.getquestion);

// add options to a question  
router.use('/:id/options', options);

// delete question
router.post('/:id/delete', questionController.delete);

// get question
router.get('/:id', questionController.getquestion)




module.exports = router;