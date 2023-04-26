import React from 'react'
import { useState, useEffect } from 'react'
import './Surenapp.css'

export default function App() {
  const [users,setUsers] =useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
      setUsers(users)
    })

  },[]);
  const handleDelete = (id) =>{
    setUsers(prevUsers => prevUsers.filter( user => user.id !== id));

  }
  return (
    <>
    <div className="App">
      <h1> List Of Users</h1>
      {users.map(user =>(
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>({user.email})</p>
          <div className="btns">
          <button onClick={ () => handleDelete(user.id)}> Delete</button>
          </div>
          
        </div>
      ))}
    </div>
    </>
  )
}
