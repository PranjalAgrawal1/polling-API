const Title = require('../models/title_model');
const Options = require('../models/option_model');


module.exports.create = async (req, res) => {
    try {
        console.log("option : ", req.body.text);
        console.log("question id : ", req.query.id);

        let title = await Title.findById(req.params.id).populate();
        let option = await Options.create({
            text: req.body.text,
            title: title
        })
        option.save();
        title.options.push(option);
        res.status(201).json(title);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}