import { configureStore } from '@reduxjs/toolkit'
import trajetSlice from './trajetslice/trajetSlice'
import userSlice from './userslice/userSlice'

export const store = configureStore({
  reducer: {
      user:userSlice,
      trajet:trajetSlice
  },
})