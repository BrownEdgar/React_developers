import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Users() {
	const [users, setUser] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(result => {
				console.log(result.data)
				setUser(result.data)
			})
	}, [])

	return (
		<div className='Users'>
			{
				users.map((elem) => {
					return (
						<Link key={elem.id} to={`${elem.id}`}>
							<p>{elem.name}</p>
						</Link>
					)
				})
			}
		</div>
	)
}
