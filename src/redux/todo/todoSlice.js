import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      { id: 1, title: "Learn JavaScript", completed: true },
      { id: 3, title: "Have a life!", completed: false },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      state.items.push({ 
        id: Date.now(), 
        title: action.payload.title, 
        completed: false 
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find(item => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCompleted: (state) => {
      state.items = state.items.filter(item => !item.completed);
    },
    markAllCompleted: (state) => {
      state.items = state.items.map(item => ({...item, completed: true}));
    }
  },
});

export const { addToDo, toggleTodo, deleteTodo, clearCompleted, markAllCompleted } = todoSlice.actions;
export default todoSlice.reducer;