import { useState } from "react";

export default function NewNoteForm({addNote}) {
    const initialState = {
        text: ""
    }
    const [newNote, setNewNote] = useState(initialState);
    function handleChange(e){
        setNewNote({[e.target.name]: e.target.value})
    }
    function handleAddNote(e){
        e.preventDefault();
        addNote(newNote)
    }

    return (
        <>
        <form onSubmit={handleAddNote}>
        <textarea 
            name="text" 
            onChange={handleChange}
            cols="30" rows="5"
            placeholder="Add Note...">
        </textarea>
        <br />
        <button type="submit">Add Note</button>
        </form>
        </>
    );
  }