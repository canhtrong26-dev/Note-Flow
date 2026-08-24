import NoteCard from './NoteCard'
import type Note from '../../features/notes/Note'

type NoteListProps = {
  notes: Note[]
}

function NoteList({ notes }: NoteListProps) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onSelect={() => {}}
          onPin={() => {}}
        />
      ))}
    </div>
  )
}

export default NoteList