import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = 'eng'
export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      return state = action.payload
    }
  }
})

export const { setLanguage } = languageSlice.actions;