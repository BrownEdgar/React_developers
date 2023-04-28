import React, { useState,useEffect } from 'react'

export default function app() {
    const [user,setUser] = useState([])
    const getData = () =>{
        fetch('https://jsonplaceholder.typicode.com/users?limit_10')
      .then(response => response.json())
      .then(json => setUser(json))
    }
    const handleDelete =(id)=>{
        setUser(prevUser => prevUser.filter( user => user.id !== id))
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div className="useId">
         <h1> Users</h1>
         {user.map(user =>(
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>({user.email})</p>
          <div className="button">
          <button onClick={()=> handleDelete(user.id)}> Delete</button>
          </div>

        </div>
      ))}
    </div>
  )
}
