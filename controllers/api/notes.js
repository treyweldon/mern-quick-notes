const Note = require('../../models/note');

module.exports = {
    create,
    getAll
}

async function create(req, res){
   try { 
    const createNote = await Note.create({...req.body, user: req.user._id});
    res.json(createNote)
}  catch(err){
        console.log(err)
    }
}

async function getAll(req, res){
    const getNotes = await Note.find();
    res.json(getNotes)
}