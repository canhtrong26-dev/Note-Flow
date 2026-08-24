
import AppLayout from './app/AppLayout'
import NoteList from './components/organisms/NoteList'
import NoteForm from './components/organisms/NoteForm'
import mockNotes from './features/notes/mockNotes'
import type Note from './features/notes/Note'
import type NoteInput from './features/notes/NoteInput'
import { useState, useEffect } from 'react'



const STORAGE_KEY = "noteFlow-notes"
function App() {
const [notes, setNotes] = useState<Note[]>(mockNotes)
const [selectedNote, setSelectedNote] = useState<Note | null>(null)
const [isLoading, setIsLoading] = useState<boolean>(true)
const [error, setError] = useState<string | null>(null)


useEffect(() => {
  setIsLoading(true)
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) {
    try {
      setNotes(JSON.parse(stored))
    } catch {
      setError("Lỗi đọc dữ liệu!")
    }
  }
  setIsLoading(false)
}, [])

// useEffect #2
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}, [notes])

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