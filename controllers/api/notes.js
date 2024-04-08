const Note = require('../../models/note');

module.exports = {
    create,
    getAll
}

async function create(req, res){
    console.log(req.body)
   try { const createNote = await Note.create({...req.body, user: req.user._id});
    console.log(createNote)
    res.json(createNote)} catch(err){
        console.log(err)
    }
}

async function getAll(req, res){
    const notes = await Note.find();
    res.json(notes)
}