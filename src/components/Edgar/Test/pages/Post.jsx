import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

export default function Post() {
	const {id} = useParams();
	const [post, setPost] = useState({})
	console.log(post)

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
				console.log(res);
				setPost(res.data)
			})
	}, [])
	
	return (
		<div className='Post'>
			<h1>welcome to special post page N {id}</h1>
			<pre>
				{JSON.stringify(post,null,1)}
			</pre>
		</div>
	)
}
