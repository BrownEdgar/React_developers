import { createSlice } from "@reduxjs/toolkit";
import usersData from './db.json';

const initialUsersValue = {
  users: usersData,
  result: ''
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersValue,
  reducers: {
    deleteById: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload.id);
    },
    deleteByName: (state, action) => {
      state.users = state.users.filter(user => user.username !== action.payload.username);
    },
    addUser: (state, action) => {
      state.users.push(action.payload.user);
    },
    getUserByLogin: (state, action) => {
      state.result = state.users.find(user => user.login === action.payload.login);
    },
    sortUsersByName: (state) => {
      state.users.sort((a, b) => a.username.localeCompare(b.username));
    },
    resetUser: () => initialUsersValue,
  },
});

export const {
  deleteById,
  deleteByName,
  addUser,
  getUserByLogin,
  sortUsersByName,
  resetUser
} = usersSlice.actions;

export default usersSlice.reducer;
