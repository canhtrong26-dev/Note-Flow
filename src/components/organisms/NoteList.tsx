import NoteCard from './NoteCard'
import type Note from '../../features/notes/Note'

type NoteListProps = {
  notes: Note[]
  onSelectNote: (note: Note) => void
  onDeleteNote: (id: string) => void
}

function NoteList({ notes, onSelectNote, onDeleteNote }: NoteListProps) {
  if (notes.length === 0) {
    return <p>No notes found</p>
  }

  return (
    <div className="note-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onSelect={() => onSelectNote(note)}
          onPin={() => {}}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
    </div>
  )
}

export default NoteList