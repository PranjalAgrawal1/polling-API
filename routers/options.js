const express = require('express');
const router = express.Router();
const optionController = require('../controller/option-controller');


// create option route
router.post('/create', optionController.create);

// delete option route
router.post('/:id/delete', optionController.delete);

// add_vote route
router.post('/:id/add_vote', optionController.addVote);



module.exports = router;