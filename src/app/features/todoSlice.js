import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
  },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    allDone: (state) => {
      state.forEach(todo => {
        todo.completed = true;
      });
    },
    removeById: (state, action) => {
      const id = action.payload;
      return state.filter(todo => todo.id !== id);
    },
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    },
  },
});

export const { allDone, removeById, addTodo } = todosSlice.actions;
export default todosSlice.reducer;
