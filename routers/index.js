const express = require('express');
const router = express.Router();
const question = require('../controller/questions-controller');


router.get('/', question.allQuestions);

router.use('/questions', require('./questions'));

router.use('/options', require('./options'));


module.exports = router;

