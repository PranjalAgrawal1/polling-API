const mongoose = require('mongoose');

const Options = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
    },
    votingUrl: {
        type: String
    },
    title: {
        type: mongoose.Types.ObjectId,
        ref: "Title"
    }
})

module.exports = mongoose.model('Options', Options)