import { useEffect, useState } from "react";
import NewNoteForm from  "../../components/NewNoteForm/NewNoteForm";
import NoteList from "../../components/NoteList/NoteList";
import {index, create} from "../../utilities/notes-api"

export default function Notes() {
    const [notes, setNotes] = useState([]);
    useEffect(function(){
        async function getNotes(){
            const notes = await index()
            setNotes(notes)
        }
        getNotes()
    }, [])
    // const [newNote, setNewNote] = useState("");

   async function addNote(note){
    await create(note)    
    // setNotes([...notes, note])
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