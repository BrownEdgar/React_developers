import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Posts() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => setPosts(res.data))
	}, [])

	return (
		<div className='Posts'>
			{
				posts.map((elem) => {
					return (
						<Link key={elem.id} to={`${elem.id}`}>
							<p>{elem.title}</p>
						</Link>
				)
				})
			}
		</div>
	)
}
