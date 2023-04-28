import { useState } from 'react'
import db from './data/db.json'
import './App.css'
import Posts from './components/Posts';

function App() {
	const [data, setData] = useState(db.posts);
	const handleDelete = (id) => {
		const filteredData = data.filter(post => post.id !== id);
		setData(filteredData)
	}
	return (
		<div>
			<h1>Lesson 4</h1>
			<Posts posts={data} handleDelete={handleDelete} />
		</div>
	)
}

export default App
