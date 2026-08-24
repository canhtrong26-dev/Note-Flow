import { useDispatch, useSelector } from 'react-redux'
import AppLayout from './app/AppLayout'
import NoteList from './components/organisms/NoteList'
import NoteForm from './components/organisms/NoteForm'
import type { RootState } from './store/store'
import { noteAdded, noteUpdated, noteDeleted } from './features/notes/notesSlice'
import type Note from './features/notes/Note'
import type NoteInput from './features/notes/NoteInput'

function App() {
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.notes.items)
  const searchText = useSelector((state: RootState) => state.filters.searchText)
  const tagFilter = useSelector((state: RootState) => state.filters.tagFilter)

  function handleCreateNote(data: NoteInput) {
    const newNote: Note = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }
    dispatch(noteAdded(newNote))
  }

  function handleUpdateNote(note: Note) {
    dispatch(noteUpdated(note))
  }

  function handleDeleteNote(id: string) {
    dispatch(noteDeleted(id))
  }

  return (
    <AppLayout>
      <NoteForm onSubmit={handleCreateNote} />
      <NoteList
        notes={notes}
        onSelectNote={() => {}}
        onDeleteNote={handleDeleteNote}
      />
    </AppLayout>
  )
}

export default App