import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todoSlice';
import usersSlice from './features/users/usersSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
    users: usersSlice,
  },
});

export default store;
