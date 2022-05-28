const mongoose = require('mongoose');

const Title = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    options: [{
        type: mongoose.Types.ObjectId,
        ref: 'Options',
    }]
})

module.exports = mongoose.model('Title', Title)