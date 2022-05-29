const express = require('express');
const router = express.Router();
const optionController = require('../controller/option-controller');

// router.post')

router.post('/create', optionController.create);
router.post('/:id/delete', optionController.delete);
router.post('/:id/add_vote', optionController.addVote);

module.exports = router;