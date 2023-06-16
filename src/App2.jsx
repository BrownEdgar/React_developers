import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, selectAllTodos } from './features/todos/todosSlice'

import './App2.css'

export default function App2() {
	const todos = useSelector(selectAllTodos);
	const dispatch = useDispatch()
	console.log(todos)

	const handleSubmit = (e) => {  
		e.preventDefault()
		const {message} = e.target;
		const todo = {
			id: Date.now(),
			title: message.value,
			completed:false
		}
		dispatch(addTodo(todo));
		e.target.reset();

	}

	return (
		<div>
			<h1>Redux persist</h1>
			
			<hr />
			<form onSubmit={handleSubmit}>
				<input type="text" id='message' required />
				<input type="submit" value="save todo" />
			</form>
			<hr />

			<div className='list'>
				<ul>
					{todos.map(todo => <li key={todo.id}>{todo.title}</li>) }
				</ul>
			</div>
		</div>
	)
}
