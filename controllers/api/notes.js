const Note = require('../../models/note');

module.exports = {
    addToList,
}

async function addToList(req, res){
    const createNote = await Note.addNote(req.body);
    res.json(notes)
}