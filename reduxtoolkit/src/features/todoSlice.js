import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid creates unique ideas
const intialstate = {
  todos: [{ id: 1, text: "ck" }]
}
export const todoSlice = createSlice({
  name: "todos",
  intialState,
  // reducer consist of properties  and function 
  // slices is almost advance version of reducer
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text
      }
      state.todos.push(todo);

    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

// now exporting indivisual todos 
export const { addTodos, removeTodos } = todoSlice.actions;
export default todoSlice.reducer;
