import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
