import React, { useState, useEffect } from 'react'
import List from './List';

import './App.css'

export default function App() {
	const [data, setData] = useState([]);
	const [isTodoDone, setIsTodoDone] = useState(false)

	const [todoStatus, setTodoStatus] = useState(
		{
			done: 0,
			undone: 0
		}
	)


	function checkStatus() {
		const doneTodo = data.filter(todo => Boolean(todo.completed)).length;
		const undone = data.length > 0 ? (data.length - doneTodo) : 0
		setTodoStatus({ done: doneTodo, undone })
	}


	const toggleTodo = (id) => {
		const copy = [...data]
		const todo = copy.find(elem => elem.id === id)
		todo.completed = !todo.completed;
		setData(copy)
		
	}

	// const handleDelete = (id) => {
	// 	const filteredData = data.filter(todo => todo.id !==id);
	// 	setData(filteredData)
	// }

	useEffect(() => {
		const getData = () => {
			fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
				.then(response => response.json())
				.then(json => setData(json))
		}
		getData()
	}, [])


	useEffect(() => {
		checkStatus()
	}, [data])
	

	const doneTodos = () => { 
		const copy = [...data]
		copy.forEach(elem => {
			elem.completed = isTodoDone;
		})
		setData(copy)
		setIsTodoDone(!isTodoDone)
	}

	return (
		<div className='App'>
			<h1>Fetch in React</h1>
			<h2>done - {todoStatus.done}</h2>
			<h2>undone - {todoStatus.undone}</h2>

			<button onClick={doneTodos}>
				{isTodoDone ? 'done All' : "undone all"}
			</button>
			<ul>
				{data.map((elem) => <List
					key={elem.id}
					todo={elem}
					toggleTodo={toggleTodo}
				/>)}
			</ul>

		</div>
	)
}
