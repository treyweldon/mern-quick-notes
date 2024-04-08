import NoteListItem from "../NoteListItem/NoteListItem"

export default function NoteList({notes}){
    const noteListItems = notes.map((n, idx) => (
        <NoteListItem note={n.text} key={idx} index={idx} />
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

