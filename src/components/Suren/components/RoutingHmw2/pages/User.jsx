import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
	const { id } = useParams();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(res => {
				setUser(res.data);
				setLoading(false)
			})
	}, [id]);
	if (loading) {
		return <h1>loading....</h1>
	}

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
