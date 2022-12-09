import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./actions";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});
