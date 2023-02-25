import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: 'light',
}

export const themeSlice = createSlice(
  {
    name: 'theme',
    initialState,
    reducers: {
      toggleTheme: (state)=>{
        if(state.theme === 'light'){
          state.theme = 'dark'
        }else if(state.theme === 'dark'){
          state.theme = 'light'
        }
      }
    }
  })

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer