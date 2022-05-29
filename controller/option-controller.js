const Title = require('../models/title_model');
const Options = require('../models/option_model');

// let expandTitle = (title) => {

// }


module.exports.create = async (req, res) => {
    try {
        let queId = req.originalUrl.toString().substring(11, 35);
        let title = await Title.findById(queId).populate();
        let option = await Options.create({
            text: req.body.text,
            votes: 0,
            title: title.id
        })

        option.votingUrl = '/options/' + option.id + '/add_vote';
        await title.options.push(option);
        option.save();
        title.save();
        res.status(201).json(title);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports.delete = async (req, res) => {
    try {
        let optionId = req.params.id;
        let option = await Options.findById(optionId);
        let queid = await Title.findById(option.title).populate();
        await queid.options.pull(option);
        queid.save();
        option.delete();
        console.log("option : ", option.id);
        console.log("queid : ", queid.id);
        res.status(201).json(queid);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports.addVote = async (req, res) => {
    try {
        optionId = req.params.id;
        let option = await Options.findById(optionId);
        option.votes = option.votes + 1;
        option.save();
        res.status(201).json(option);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}