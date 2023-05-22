import React, { useState, useMemo, useEffect, useCallback } from 'react'
import axios from 'axios'
import Component from './Component';
import List from './List';

export default function App() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);


	const handleClick = () => {
		setCount(prevCount => prevCount + 1);
	}

	const momoizedValue = useMemo(() => <Component />, [])

	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/todos?_limit=50')
			.then(res => setTodos(res.data))
	}, [])

	const handleDelete = (id) => {
		const newList = todos.filter(elem => elem.id !== id);
		setTodos(newList)
	}

	const memoizedFunction = useCallback((id) => handleDelete(id), [todos])

	return (
		<div>
			<h1>Count: {count}</h1>
			<button className="btn" onClick={handleClick}>add count</button>
			{momoizedValue}
			<hr />
			<List todos={todos} handleDelete={memoizedFunction} />

		</div>
	)
}
