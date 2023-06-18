import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todoSlice';
import usersSlice from './features/users/usersSlice';
import shoppingCardSlice from './features/shoppingCard/shoppingCardSlice';
import userListSlice from './features/userList/userListSlice';


const store = configureStore({
  reducer: {
    todos: todoSlice,
    users: usersSlice,
    shoppingCard: shoppingCardSlice,
    objects:userListSlice,

  },
});

export default store;
