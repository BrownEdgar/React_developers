import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"


export default function Home() {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users")
			.then(res => {
				setUsers(res.data)
			})
	}, [])

	return (
		<div className="Users">
			<h1>Click on name for info !</h1>
			{
				users.map(elem => {
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