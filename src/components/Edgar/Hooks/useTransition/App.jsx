import React, { useState, useEffect, useTransition} from 'react';
import axios from 'axios'

export default function App() {
	const [comments, setComments] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/photos')
			.then(res => setComments(res.data))
	}, [])

	const handleChange = (e) => {
		const { value } = e.target;
		startTransition(() => setSearchValue(value))
	}

	const filterCommets = (comments, searchValue) => {
		if (!searchValue) {
			return comments;
		}
		return comments.filter(comment => comment.title.includes(searchValue))
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} />
			</form>
			<div className="comments">
				{
					isPending && <h1>Loading...</h1>
				}
				{
					filterCommets(comments, searchValue)
						.map(elem => {
							return <div
								key={elem.id}
								style={{
									margin: '14px auto',
									borderBottom: '2px solid grey',
									padding: '14px'
								}}>
									<img src={elem.url} alt="" width={200}/>
								<h2>{elem.title}</h2>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corporis, soluta delectus eaque libero dolorem iure iusto ipsum sed amet.</p>
							</div>
						})
				}
			</div>
		</div>
	)
}
