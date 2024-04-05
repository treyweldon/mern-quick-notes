import { useState } from "react";
import NewNote from  "../../components/NewNote/NewNote";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");

    function addNote(note){
        setNotes([...notes, note])
    };
    
    return (
        <>
        <h1> Notes </h1>
        <NewNote addNote={addNote}/>
        </>
    );
  }