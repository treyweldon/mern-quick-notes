import { useState } from "react";
import NewNote from  "../../components/NewNote/NewNote";
import NoteList from "../../components/NoteList/NoteList";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    // const [newNote, setNewNote] = useState("");

    function addNote(note){
        setNotes([...notes, note])
    };
    
    return (
        <>
        <h1> Notes </h1>
        <NewNote addNote={addNote}/>
        <br />
        <NoteList notes={notes}/>
        </>
    );
  }