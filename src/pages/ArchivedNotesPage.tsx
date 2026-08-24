import NoteList from '../components/organisms/NoteList'
import type Note from '../features/notes/Note'

type ArchivedNotesPageProps = {
  notes: Note[]
  onSelectNote: (note: Note) => void
  onDeleteNote: (id: string) => void
}

function ArchivedNotesPage({
  notes,
  onSelectNote,
  onDeleteNote,
}: ArchivedNotesPageProps) {
  return (
    <div>
      <h2>Archived Notes</h2>
      <NoteList
        notes={notes.filter((note) => note.archived === true)}
        onSelectNote={onSelectNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  )
}

export default ArchivedNotesPage