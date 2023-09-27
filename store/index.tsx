import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../slice/TaskSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

