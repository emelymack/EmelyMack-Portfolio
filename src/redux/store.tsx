import { configureStore } from "@reduxjs/toolkit";
import { languageSlice } from "./languageSlice";
import { scrollingSlice } from "./scrollingSlice";

const store = configureStore({
  reducer: {
    language: languageSlice.reducer,
    scrolling: scrollingSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;