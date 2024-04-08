// import Note from '../../../models/notes';

export default function NoteListItem({note, index}){
    return (
        <div>
            <div>{index + 1}. {note}</div>
            <div>{note.createdAt}</div>
        </div>
    )
}