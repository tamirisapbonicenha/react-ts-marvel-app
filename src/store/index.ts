import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../state/searchSlice';
import { charactersSlice } from '../state/charactersSlice';

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
    characters: charactersSlice.reducer,
  },
})