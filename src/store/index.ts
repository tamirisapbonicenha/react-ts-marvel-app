import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from '../state/charactersSlice';

export default configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
})