import { useState } from 'react'
import AppLayout from './app/AppLayout'
import NoteList from './components/organisms/NoteList'
import NoteForm from './components/organisms/NoteForm'
import mockNotes from './features/notes/mockNotes'
import type Note from './features/notes/Note'
import type NoteInput from './features/notes/NoteInput'

function App() {
  const [notes, setNotes] = useState<Note[]>(mockNotes)
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)

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
    setNotes([newNote, ...notes])
  }

  function handleUpdateNote(data: NoteInput) {
    if (selectedNote === null) return
    setNotes(
      notes.map((note) =>
        note.id === selectedNote.id ? { ...note, ...data } : note
      )
    )
    setSelectedNote(null)
  }

  function handleSelectNote(note: Note) {
    setSelectedNote(note)
  }
  

 function handleDeleteNote(id: string) {
  setNotes(notes.filter((note) => note.id !== id))
}

return (
  <AppLayout>
    {selectedNote ? (
      <NoteForm
        onSubmit={handleUpdateNote}
        initialNote={selectedNote}
      />
    ) : (
      <NoteForm onSubmit={handleCreateNote} />
    )}
    <NoteList
      notes={notes}
      onSelectNote={handleSelectNote}
      onDeleteNote={handleDeleteNote}
    />
  </AppLayout>
)
}

export default App