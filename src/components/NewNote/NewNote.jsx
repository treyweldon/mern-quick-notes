import { useState } from "react";

export default function NewNote() {
    const [newNote, setNewNote] = useState("");

    function handleAddNote(e){
        e.preventDefault();
        setNewNote("")
    }

    return (
        <>
        <form onSubmit={handleAddNote}>
        <textarea 
            name="note" 
            value={newNote} 
            onChange={(e) => setNewNote(e.target.value)}
            cols="30" rows="5"
            placeholder="Add Note...">

            </textarea>
        <br />
        <button type="submit">Add Note</button>
        </form>
        </>
    );
  }