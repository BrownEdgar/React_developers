import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
      .then(res => setUsers(res.data));
  }, []);

  return (
    <div className='Users'>
      {users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div>
            <h1>User ID: {user.id}</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
