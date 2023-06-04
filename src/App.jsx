import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteById,
  deleteByName,
  addUser,
  getUserByLogin,
  sortUsersByName,
  resetUser
} from './store/features/userSlice';
import './App.scss'

export default function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteByIdHandler = () => {
    dispatch(deleteById({ id: 50 }));
  };

  const deleteByNameHandler = () => {
    dispatch(deleteByName({ username: "Charlene" }));
  };

  const addUserHandler = () => {
    dispatch(
      addUser({
        user: {
          id: 51,
          username: "Alexa",
          login: "Enter-Alexa",
          email: "test@alexa.com",
          gender: "Female",
          address: "Ervand Kochar street"
        }
      })
    );
  };

  const getUserHandler = () => {
    dispatch(getUserByLogin({ login: "Donovin" }));
  };

  const sortUsersHandler = () => {
    dispatch(sortUsersByName());
  };

  const resetUsersHandler = () => {
    dispatch(resetUser());
  };

  return (
    <div className='App'>
      <pre>{JSON.stringify(state, null, 1)}</pre>

      <button onClick={deleteByIdHandler}>DELETE BY ID</button>
      <button onClick={deleteByNameHandler}>DELETE BY NAME</button>
      <button onClick={addUserHandler}>ADD USER</button>
      <button onClick={getUserHandler}>GET USER</button>
      <button onClick={sortUsersHandler}>SORT USERS</button>
      <button onClick={resetUsersHandler}>RESET USER LIST</button>
    </div>
  );
}
