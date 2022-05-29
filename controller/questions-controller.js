const Title = require('../models/title_model');
const Options = require('../models/option_model');

// /  (To get all question)
// get all question
module.exports.allQuestions = async (req, res) => {
    try {

        let question = await Title.find();

        for (let i = 0; i < question.length; ++i) {
            let option = await Options.find({ title: question[i] });
            question[i].options = option;
        }

        res.status(201).json(question);
    } catch (err) {
        console.log(err);
    }
}



// /questions/create  (To create a question)
// create question
module.exports.create = async (req, res) => {
    const title = new Title({
        title: req.body.title,
        Options: [],
    })
    try {
        const newTitle = await title.save();
        console.log("question added : ", newTitle.title)
        res.status(201).json(newTitle);
    } catch (err) {
        // console.log(err);
        res.status(400).json({ message: err.message });
    }
}


// /questions/:id (To view a question and it’s options)
// get question
module.exports.getquestion = async (req, res) => {
    try {
        let que = await Title.findById(req.params.id);
        let option = await Options.find({ title: req.params.id });
        que.options = option
        res.status(201).json(que);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


// /questions/:id/delete (To delete a question)
// delete question
module.exports.delete = async (req, res) => {
    try {
        // console.log(req.params.id);
        let queId = req.params.id;
        await Options.deleteMany({ title: queId });
        await Title.findByIdAndDelete(queId);
        res.status(201).json({ message: "Deleted Sucessfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}