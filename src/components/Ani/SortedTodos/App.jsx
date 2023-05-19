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
		const todo = data.find(elem => elem.id === id);
		todo.completed = !todo.completed;
		setData([...data])
	}

    const sorteFalse = () =>{
        const sort = data.toSorted((a, b) => a.completed - b.completed )
        setData(sort)
    }

    const sorteTrue = () =>{
        const sort = data.toSorted((a, b) => b.completed - a.completed )
        setData(sort)
    }

    const deleteTodo = (id) => {
		// const filteredData = data.filter(elem => elem.id !==id);
		setData(data.filter(elem => elem.id !== id))
	}

	return (
		<div>
			<Component data={data} 
            todoToggle={todoToggle} 
            sorteFalse ={sorteFalse} 
            sorteTrue={sorteTrue}
            deleteTodo={deleteTodo}
            />
		</div>
	)
}