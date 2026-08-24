import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AppLayout from './app/AppLayout'
import NoteListPage from './pages/NoteListPage'
import PinnedNotesPage from './pages/PinnedNotesPage'
import ArchivedNotesPage from './pages/ArchivedNotesPage'
import NoteDetailPage from './pages/NoteDetailPage'
import type { RootState } from './store/store'
import { noteAdded, noteUpdated, noteDeleted } from './features/notes/notesSlice'
import type Note from './features/notes/Note'
import type NoteInput from './features/notes/NoteInput'

function App() {
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.notes.items)
  const searchText = useSelector((state: RootState) => state.filters.searchText)
  const [selectedNote, setSelectedNote] = useState<Note | null>(null)

  const visibleNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  )

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

  function handleUpdateNote(data: NoteInput) {
    if (!selectedNote) return
    dispatch(noteUpdated({ ...selectedNote, ...data }))
    setSelectedNote(null)
  }

  function handleDeleteNote(id: string) {
    dispatch(noteDeleted(id))
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/notes" replace />} />
        <Route
          path="/notes"
          element={
            <NoteListPage
              notes={visibleNotes}
              selectedNote={selectedNote}
              onCreateNote={handleCreateNote}
              onUpdateNote={handleUpdateNote}
              onSelectNote={setSelectedNote}
              onDeleteNote={handleDeleteNote}
            />
          }
        />
        <Route
          path="/notes/pinned"
          element={
            <PinnedNotesPage
              notes={visibleNotes}
              onSelectNote={setSelectedNote}
              onDeleteNote={handleDeleteNote}
            />
          }
        />
        <Route
          path="/notes/archived"
          element={
            <ArchivedNotesPage
              notes={visibleNotes}
              onSelectNote={setSelectedNote}
              onDeleteNote={handleDeleteNote}
            />
          }
        />
        <Route path="/notes/:id" element={<NoteDetailPage notes={notes} />} />
      </Routes>
    </AppLayout>
  )
}

export default App
