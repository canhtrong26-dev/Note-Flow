import { Link } from 'react-router-dom'
import type Note from '../../features/notes/Note'
import NoteMeta from '../molecules/NoteMeta'

type NoteCardProps = {
  note: Note
  onSelect: () => void
  onPin: () => void
  onDelete: () => void
}

function NoteCard({ note, onSelect, onPin, onDelete }: NoteCardProps) {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <NoteMeta
        tags={note.tags}
        createdAt={note.createdAt}
        pinned={note.pinned}
      />
      <Link to={`/notes/${note.id}`}>Xem chi tiết</Link>
      <button onClick={onSelect}>Sửa</button>
      <button onClick={onPin}>Pin</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default NoteCard