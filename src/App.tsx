import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import NotesLayout from './components/templates/NotesLayout'
import NoteListPage from './pages/NoteListPage'
import PinnedNotesPage from './pages/PinnedNotesPage'
import ArchivedNotesPage from './pages/ArchivedNotesPage'
import NoteDetailPage from './pages/NoteDetailPage'
import mockNotes from './features/notes/mockNotes'
import type Note from './features/notes/Note'
import type NoteInput from './features/notes/NoteInput'

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
    <Routes>
      <Route path="/" element={<Navigate to="/notes" />} />
      <Route path="/notes" element={<NotesLayout />}>
        <Route index element={
          <NoteListPage
            notes={notes}
            selectedNote={selectedNote}
            onCreateNote={handleCreateNote}
            onUpdateNote={handleUpdateNote}
            onSelectNote={handleSelectNote}
            onDeleteNote={handleDeleteNote}
          />
        } />
        <Route path="pinned" element={
          <PinnedNotesPage
            notes={notes}
            onSelectNote={handleSelectNote}
            onDeleteNote={handleDeleteNote}
          />
        } />
        <Route path="archived" element={
          <ArchivedNotesPage
            notes={notes}
            onSelectNote={handleSelectNote}
            onDeleteNote={handleDeleteNote}
          />
        } />
        <Route path=":id" element={<NoteDetailPage notes={notes} />} />
      </Route>
    </Routes>
  )
}

export default App