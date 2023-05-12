import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function UserInfo() {
	const {id} = useParams();
	const [user, setUser] = useState({})
	

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(result => {
		
				setUser(result.data)
			})
	}, [])
	
	return (
		<div className='User'>
			<h1>welcome to User N {id}</h1>
			<pre>
				{JSON.stringify(user,null,1)}
			</pre>
		</div>
	)
}
