import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../features/notes/notesSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    filters: filtersReducer
  }
})