import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
	const { id } = useParams();
	const [user, setUser] = useState({});

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {
				console.log(res);
				setUser(res.data);
			})
	}, [id]);

	return (
		<div className='User-set'>
			<h1>Welcome To The Specified User Card No: {id}</h1>
			<ul>
				<li>ID: {user.id}</li>
				<li>Name: {user.name}</li>
				<li>Username: {user.username}</li>
				<li>Email: {user.email}</li>
				<li>Address: {user.address ? `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}` : null}</li>
				<li>Phone: {user.phone}</li>
				<li>Website: {user.website}</li>
				<li>Company: {user.company ? `${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}` : null}</li>
			</ul>
		</div>
	)
}
