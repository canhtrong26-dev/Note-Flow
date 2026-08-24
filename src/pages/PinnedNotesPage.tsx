import NoteList from '../components/organisms/NoteList'
import type Note from '../features/notes/Note'

type PinnedNotesPageProps = {
  notes: Note[]
  onSelectNote: (note: Note) => void
  onDeleteNote: (id: string) => void
}

function PinnedNotesPage({
  notes,
  onSelectNote,
  onDeleteNote,
}: PinnedNotesPageProps) {
  return (
    <div>
      <h2>Pinned Notes</h2>
      <NoteList
        notes={notes.filter((note) => note.pinned === true)}
        onSelectNote={onSelectNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  )
}

export default PinnedNotesPage