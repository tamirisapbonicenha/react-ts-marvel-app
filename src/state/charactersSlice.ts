import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api';

type Paginate = {
  params: {
    offset: number,
  }
}

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (paginate: Paginate) => {
  const response = await api.get('/characters', paginate)
  return response.data.data;
})

export const fetchCharacterById = createAsyncThunk('characters/fetchCharacterById', async (id: number) => {
  const response = await api.get(`/characters/${id}`)
  return response.data.data;
})

export const fetchSeriesCharacter = createAsyncThunk('characters/fetchSeriesCharacter', async (id: number) => {
  const response = await api.get(`/characters/${id}/series`)
  return response.data.data;
})

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    loading: false,
    error: '',
    characters: [],
    character: [],
    series: [],
    pagination: {
      total: 0,
      count: 0,
      offset: 0,
      limit: 0,
    },
  },
  reducers: {
    paginate: (state) => {
     state.loading = true;
    },
  },
  extraReducers: {
    // .toString() - solução temporária até eu descobrir o porquê o erro no TS
    [fetchCharacters.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [fetchCharacters.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.characters = payload.results;
      state.pagination.total = payload.total;
      state.pagination.count = payload.count;
      state.pagination.offset = payload.offset;
      state.pagination.limit = payload.limit;
    },
    [fetchCharacters.rejected.toString()]: (state, action) => {
      state.loading = false;
    },
    [fetchCharacterById.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [fetchCharacterById.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.character = payload.results;
    },
    [fetchCharacterById.rejected.toString()]: (state, action) => {
      state.loading = false;
    },
    [fetchSeriesCharacter.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [fetchSeriesCharacter.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.series = payload.results;
    },
    [fetchSeriesCharacter.rejected.toString()]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { paginate } = charactersSlice.actions

export const charactersSelector = (state: any) => state.characters;