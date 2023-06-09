import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, getAsyncTodos, selectAllCompletedTodos, selectAllTodos } from './store/features/todos/todoSlice';

import './App.css'

export default function App() {
	const todos = useSelector(selectAllCompletedTodos);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const { message } = e.target;
		const todo = {
			id: Date.now(),
			title: message.value,
			completed: false,
		}
		dispatch(addTodo(todo))
		e.target.message.value = ''
	}

	useEffect(() => {
		dispatch(getAsyncTodos())
	

	}, [])
	
	const handleClick = (e) => {
		e.target.classList.add('active');
		setTimeout(() => { 
			e.target.disabled = true;
			e.target.classList.remove('active')
		 }, 3000)
		dispatch(getAsyncTodos())
	}

	return (
		<div className='App'>
			{/* <Sliders products={products}/> */}
			<div className="formBox">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder='ented todo title' id='message' required />
					<input type="submit" value="add" />
				</form>
			</div>
			<div className='actions'>
				<button onClick={handleClick}>get <span>async</span> todos </button>
			</div>
			<div className='list'>
				<ul>
					{todos.map(elem => {
						return <li key={elem.id}>{elem.title}</li>
					})}
				</ul>
			</div>
		</div>
	)
}
