import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Users({ toggleModal,users }) {
 

  return (
    <div className='Users'>
      {users.map(user => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div>
						<span onClick={(e) => toggleModal(e, user.id)}>&#10006;</span>
            <h1>User ID: {user.id}</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
