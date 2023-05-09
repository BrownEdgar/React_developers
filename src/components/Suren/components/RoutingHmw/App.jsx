import React, { useState , useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage';



export default function App(){
  const [users, setUsers] = useState([]);

  const handleRegister = (newUser) =>{
    setUsers([...users,newUser]);
  
  };

  return(
      <div>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path='*' element={<LoginPage />}/>
        </Routes>
      </div>
  )
}
