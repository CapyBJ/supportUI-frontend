import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import themeReducer from '../features/theme/themeSlice'
import ticketReducer from '../features/tickets/ticketSlice'
import notesReducer from '../features/notes/noteSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    tickets: ticketReducer,
    notes: notesReducer
  },
  devTools: false
})
