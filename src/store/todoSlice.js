import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newTask = action.payload;
      state.todoList = [...state.todoList, newTask];
    },

    clearTodoList: (state, action) => {
      state.todoList = [];
    },

    deleteItem: (state, action) => {
      const itemId = action.payload;

      state.todoList = state.todoList.filter((item) => {
        return item.id !== itemId;
      });
    },
  },
});

export const { addItem, clearTodoList, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
