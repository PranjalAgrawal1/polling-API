const express = require('express');
const router = express.Router();
const question = require('../controller/questions-controller');

// get all question route
router.get('/', question.allQuestions);


// questions route
router.use('/questions', require('./questions'));


// options route
router.use('/options', require('./options'));


module.exports = router;

