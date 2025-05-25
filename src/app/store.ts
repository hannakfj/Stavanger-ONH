// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../features/language/languageSlice'

export const store = configureStore({

  reducer: {
    language: languageReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
