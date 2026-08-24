import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type FiltersState = {
    searchText: string
    tagFilter: string
    viewMode: 'grid' | 'list'
}

const initialState: FiltersState = {
    searchText: '',
    tagFilter: '',
    viewMode: 'grid'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchTextChanged(state, action: PayloadAction<string>) {
            state.searchText = action.payload
        },
        tagFilterChanged(state, action: PayloadAction<string>) {
            state.tagFilter = action.payload
        },
        viewModeChanged(state, action: PayloadAction<'grid' | 'list'>) {
            state.viewMode = action.payload
        }
    }
})

export const {
    searchTextChanged,
    tagFilterChanged,
    viewModeChanged
} = filtersSlice.actions

export default filtersSlice.reducer