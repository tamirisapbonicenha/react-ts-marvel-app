import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    term: '',
  },
  reducers: {
    searchTerm: (state, action) => {
      state.term = action.payload
    },
  },
})

export const searchSelector = (state: any) => state.search;

export const {
  searchTerm,
} = searchSlice.actions