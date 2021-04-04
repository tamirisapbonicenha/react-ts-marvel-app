import { configureStore } from '@reduxjs/toolkit'
import { searchSlice } from '../state/searchSlice'

export default configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
})