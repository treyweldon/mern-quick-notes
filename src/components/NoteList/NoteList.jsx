import NoteListItem from "../NoteListItem/NoteListItem"

export default function NoteList({notes}){
    const noteListItems = notes.map((n) => (
        <NoteListItem note={n} />
    ))
    return (
        <>
        <ul>{noteListItems}</ul>
        </>
    )
}