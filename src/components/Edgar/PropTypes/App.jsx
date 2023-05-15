import { useState, useEffect } from 'react';
import Component from './Component'
import axios from 'axios';

export default function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then(res => setData(res.data))
	}, [])

	const todoToggle = (id) => { 
		console.log(data)
		const todo = data.find(elem => elem.id === id);
		todo.completed = !todo.completed;
		setData([...data])
	}

	return (
		<div>
			<Component data={data} todoToggle={todoToggle}/>
		</div>
	)
}
