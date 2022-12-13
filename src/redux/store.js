import { configureStore } from "@reduxjs/toolkit";
import actions from "./actions";

export const store = configureStore({
  reducer: {
    todos: actions,
  },
});
