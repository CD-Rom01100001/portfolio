import { configureStore } from "@reduxjs/toolkit";
import { activeBlockReducer } from "./slices/activeBlockSlice";
import { activeLanguageReducer } from "./slices/languageSlice";

export const store = configureStore({
  reducer: {
    activeBlock: activeBlockReducer,
    activeLanguage: activeLanguageReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;