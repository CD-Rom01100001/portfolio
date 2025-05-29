import { configureStore } from "@reduxjs/toolkit";
import { activeBlockReducer } from "./slices/activeBlockSlice";

export const store = configureStore({
  reducer: {
    activeBlock: activeBlockReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;