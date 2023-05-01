import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
	const [userData, setUserData] = useState({ 
	  posts: [],
	  todos: []
	});
	const [userId, setUserId] = useState(0);
  
	useEffect(() => {
	  const getData = async () => {
		try {
		  const todos = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
		  const posts = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
		  setUserData({
			todos: todos.data,
			posts: posts.data 
		  });
		} catch (err) {
		  console.log(err);
		}
	  };
	  getData();
	}, [userId]);
  
	return (
	  <div className='App'>
		<label>
		  <h1> Select User ID</h1>
		  <input type="number" max={10} value={userId} onChange={(e) => setUserId(e.target.value)}/>
		</label>
		<h2>Todos:</h2>
		<ul>
		  {userData.todos.map((todo) => (
			<li key={todo.id}>{todo.title}</li>
		  ))}
		</ul>
		<h2>Posts:</h2>
		<ul>
		  {userData.posts.map((post) => (
			<li key={post.id}>{post.title}</li>
		  ))}
		</ul>
	  </div>
	);
  }