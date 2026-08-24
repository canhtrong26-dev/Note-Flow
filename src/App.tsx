import AppLayout from './app/AppLayout'
import NoteList from './components/organisms/NoteList'
import mockNotes from './features/notes/mockNotes'

function App() {
  return (
    <AppLayout>
      <NoteList notes={mockNotes} />
    </AppLayout>
  )
}

export default App