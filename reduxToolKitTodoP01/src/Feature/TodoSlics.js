import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "sample todo" }],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action)=>{

        state.todos.filter(todo)

    }
  },
});
