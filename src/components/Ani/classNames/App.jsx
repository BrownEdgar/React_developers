import React, { useState } from 'react'
import moment from "moment";
import "./App.css"


export default function App() {
	const [users, setUsers] = useState([
		{
			id: 1,
			firstName: "Jhon",
			lastName: "Smith",
			registredDate: moment(),
			language: "javascript"
		},
		{
			id: 2,
			firstName: "Olivia",
			lastName: "Brown",
			registredDate: moment().subtract(10, 'days'),
			language: "react"
		},
		{
			id: 3,
			firstName: "Joe",
			lastName: "Wilson",
			registredDate: moment().subtract(1, 'months'),
			language: "node"
		},
		{
			id: 4,
			firstName: "William",
			lastName: "Morton",
			registredDate: moment().subtract(18, 'days'),
			language: "HTLM&CSS"
		},
		{
			id: 5,
			firstName: "Emily",
			lastName: "White",
			registredDate: moment().subtract(1, 'days'),
			language: "javascript"
		},
	])

	const sorteUsers = () => {
		const sort = users.toSorted((a, b) => a.registredDate - b.registredDate)
		setUsers(sort)
	}

	const filterUsers = (lang) => {
		const filtered = users.filter(user => user.language === lang);
	}
	return (
		<div className='wrap'>
			{users.map(user => {
				return (
					<h3
						key={user.id}
						className={user.language === "HTLM&CSS"
							? "html"
							: user.language}
					>
						{user.firstName}
						{" "}
						{user.lastName}
						{" "}
						{user.language}
					</h3>
				)
			}
			)}
			<button onClick={() => sorteUsers()}>Sort</button>
			<button onClick={() => filterUsers("Javascripte")}>Javascripte</button>
			<button onClick={() => filterUsers("React")}>React</button>
			<button onClick={() => filterUsers("Node")}>Node</button>
			<button onClick={() => filterUsers("HTLM&CSS")}>HTLM&CSS</button>
		</div>
	)
}
