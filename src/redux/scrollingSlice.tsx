import { createSlice } from '@reduxjs/toolkit';

export interface scrollState {
  logoSrc: string,
  btnHeaderClass: string,
  navbarClass: string,
  menuColor: string,
  menuSize: string
}

const initialState: scrollState = {
  logoSrc: './logo.png',
  btnHeaderClass: 'btn-outline',
  navbarClass: 'bg-light',
  menuColor: '#6e07f3',
  menuSize: '2x'
}
export const scrollingSlice = createSlice({
  name: 'scrolling',
  initialState,
  reducers: {
    setScrolling: (state) => {
      if (window.scrollY !== 0){
        return state = {
          logoSrc: './logo-white.png',
          btnHeaderClass: 'btn-outline-dark',
          navbarClass: 'sticky',
          menuColor: '#fff',
          menuSize: '1x'
        }
      } else {
        return initialState
      }
    }
  }
})

export const { setScrolling } = scrollingSlice.actions;