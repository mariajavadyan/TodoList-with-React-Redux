import { createSlice } from "@reduxjs/toolkit";

export const actions = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: function (state, action) {
      console.log(action);
      state.items.push(action.payload);
    },
    deleteTodo: function (state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateTodo: function (state, action) {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.desc = action.payload.desc;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = actions.actions;

export default actions.reducer;
