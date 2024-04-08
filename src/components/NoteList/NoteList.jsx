import NoteListItem from "../NoteListItem/NoteListItem"

export default function NoteList({notes}){
    const noteListItems = notes.map((n) => (
        <NoteListItem note={n} />
    ))
    return (
        <>
        {noteListItems.length ?
        <ul>{noteListItems}</ul>
        :
        <div>No Notes to display</div>
        }
        </>
    )
}

