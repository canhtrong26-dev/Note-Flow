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
    <div className={note.pinned ? 'note-card note-card--pinned' : 'note-card'}>
      {note.pinned && <span className="note-card__badge">Pinned</span>}
      <h3 className="note-card__title">{note.title}</h3>
      <p className="note-card__content">{note.content}</p>
      <NoteMeta tags={note.tags} createdAt={note.createdAt} />
      <div className="note-card__actions">
        <Link className="note-card__action" to={`/notes/${note.id}`}>
          Xem chi tiết
        </Link>
        <button className="note-card__action" onClick={onSelect}>Sửa</button>
        <button className="note-card__action" onClick={onPin}>Pin</button>
        <button className="note-card__action" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
