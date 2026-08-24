import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type Note from './Note'
import mockNotes from './mockNotes'

type NotesState = {
  items: Note[]
  status: 'idle' | 'loading' | 'error'
  error: string | null
}

const initialState: NotesState = {
  items: mockNotes,
  status: 'idle',
  error: null
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state, action: PayloadAction<Note>) {
      state.items.unshift(action.payload)
    },
    noteUpdated(state, action: PayloadAction<Note>) {
      const index = state.items.findIndex((note) => note.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    noteDeleted(state, action: PayloadAction<string>) {
      state.items = state.items.filter((note) => note.id !== action.payload)
    },
    notePinnedToggled(state, action: PayloadAction<string>) {
      const note = state.items.find((note) => note.id === action.payload)
      if (note) {
        note.pinned = !note.pinned
      }
    },
    noteArchivedToggled(state, action: PayloadAction<string>) {
      const note = state.items.find((note) => note.id === action.payload)
      if (note) {
        note.archived = !note.archived
      }
    }
  }
})

export const {
  noteAdded,
  noteUpdated,
  noteDeleted,
  notePinnedToggled,
  noteArchivedToggled
} = notesSlice.actions

export default notesSlice.reducer