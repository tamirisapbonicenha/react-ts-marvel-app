import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../services/api';
import { InitialState, ErrorRawData, Paginate, Search, Character, Pagination } from '../types'
import type { RootState } from '../store'

type CharacterState = {
  characters: Character;
}

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (paginate: Paginate, { rejectWithValue }) => {
  try {
    const response = await api.get('/characters', paginate)
    return response.data.data;
  } catch (err) {
    if (!err.response) {
      throw err
    }
    return rejectWithValue(err.response)
  }
});

export const fetchCharactersByName = createAsyncThunk('characters/fetchCharactersByName', async (name: Search) => {
  const response = await api.get('/characters', name)
  return response.data.data;
});

export const fetchCharactersById = createAsyncThunk('characters/fetchCharactersById', async (id: number) => {
  const response = await api.get(`/characters/${id}`)
  return response.data.data;
});

export const fetchSeriesCharacter = createAsyncThunk('characters/fetchSeriesCharacter', async (id: number) => {
  const response = await api.get(`/characters/${id}/series`)
  return response.data.data;
});

const initialState = {
  loading: false,
  error: null,
  characters: [],
  character: [],
  series: [],
  pagination: {
    total: 0,
    count: 0,
    offset: 0,
    limit: 0,
  },
} as InitialState;

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    paginate: (state) => {
     state.loading = true;
    },
    setCharacterOnLocalStorage: (state, { payload }) => {
      state.character[0].name = payload.name;
      state.character[0].description = payload.description;
    },
    getCharacterOnLocalStorage: (state, action) => {
      state.characterOnClient = action.payload
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
    [fetchCharacters.rejected.toString()]: (state, { payload }: PayloadAction<ErrorRawData>) => {
      state.loading = false;
      state.error = payload.data;
    },
    [fetchCharactersByName.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [fetchCharactersByName.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.characters = payload.results;
      state.pagination.total = payload.total;
      state.pagination.count = payload.count;
      state.pagination.offset = payload.offset;
      state.pagination.limit = payload.limit;
    },
    [fetchCharactersByName.rejected.toString()]: (state, action) => {
      state.loading = false;
    },
    [fetchCharactersById.pending.toString()]: (state, action) => {
      state.loading = true;
    },
    [fetchCharactersById.fulfilled.toString()]: (state, { payload }) => {
      state.loading = false;
      state.character = payload.results;
    },
    [fetchCharactersById.rejected.toString()]: (state, action) => {
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

export const { paginate, setCharacterOnLocalStorage, getCharacterOnLocalStorage } = charactersSlice.actions

export const charactersSelector = (state: RootState) => state.characters;