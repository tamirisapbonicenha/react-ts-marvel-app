import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api';

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

export const fetchCharacter = createAsyncThunk('characters/fetchCharacter', async () => {
  const response = await api.get('/characters/')
  return response.data.data
})