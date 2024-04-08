import { useState } from "react";
import NewNoteForm from  "../../components/NewNoteForm/NewNoteForm";
import NoteList from "../../components/NoteList/NoteList";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    // const [newNote, setNewNote] = useState("");

    function addNote(note){
        setNotes([...notes, note])
    };
    
    return (
        <>
        <h1> Notes: </h1>
        <NewNoteForm addNote={addNote} notes={notes} />
        <br />
        <NoteList notes={notes}/>
        </>
    );
  }