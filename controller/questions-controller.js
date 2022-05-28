const Title = require('../models/title_model');
const Options = require('../models/option_model');


module.exports.allQuestions = async (req, res) => {
    try{
        let question = await Title.find();
        res.status(201).json(question);
    } catch(err){
        console.log(err);
    }
}

module.exports.create = async (req, res) =>{
    const title = new Title({
        title: req.body.title,
    })
    try{
        const newTitle = await title.save();
        console.log("question added : ", newTitle.title)
        res.status(201).json(newTitle);
    } catch(err){
        // console.log(err);
        res.status(400).json({message: err.message});
    }
}

module.exports.getquestion = async (req, res) => {
    try{
        let que = await Title.findById(req.params.id);
        res.status(201).json(que);
    } catch(err){
        res.status(400).json({message: err.message});
    }
}
