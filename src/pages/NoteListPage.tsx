import NoteList from '../components/organisms/NoteList'
import NoteForm from '../components/organisms/NoteForm'
import type Note from '../features/notes/Note'
import type NoteInput from '../features/notes/NoteInput'

type NoteListPageProps = {
  notes: Note[]
  selectedNote: Note | null
  onCreateNote: (data: NoteInput) => void
  onUpdateNote: (data: NoteInput) => void
  onSelectNote: (note: Note) => void
  onDeleteNote: (id: string) => void
}

function NoteListPage({
  notes,
  selectedNote,
  onCreateNote,
  onUpdateNote,
  onSelectNote,
  onDeleteNote,
}: NoteListPageProps) {
  return (
    <div>
      <h2>All Notes</h2>
      {selectedNote ? (
        <NoteForm onSubmit={onUpdateNote} initialNote={selectedNote} />
      ) : (
        <NoteForm onSubmit={onCreateNote} />
      )}
      <NoteList
        notes={notes}
        onSelectNote={onSelectNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  )
}

export default NoteListPage