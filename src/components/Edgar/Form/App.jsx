import React, { useEffect, useRef, useState } from 'react'

import "./App.scss"

export default function App() {
	const [value, setValue] = useState('')
	// const [user, setUser] = useState({
	// 	name: "",
	// 	email: "",
	// 	password: "",
	// })
	// const [users, setUsers] = useState([]);
	// const handelSumit = (e) => {
	// 	e.preventDefault();
	// 	setUsers([...users, e.target[0].value])
	// 	e.target[0].value= ""
	// }
	// const handelSumit = (e) => {
	// 	e.preventDefault();
	// }
	// const handleChange = (e) => {
	// 	const { name,value } = e.target
	// 	setUser({ ...user, [name]: value })
	// }


	const selectRef = useRef(null)
	useEffect(() => {
	
		setValue(selectRef.current.value)
	}, [])
	
	const handleChange = (e) => {
		setValue(e.target.value)
	 }
	return (
		<div className='wrapper'>
			{/* <form onSubmit={handelSumit}>
				<input
					type="email"
					value=''
					onChange={handleChange}
					name='email'
					required
				/>
				<input
					type="text"
					name='name'
					value={user.name}
					onChange={handleChange}
					required
				/>
				<input
					type="password"
					value={user.password}
					onChange={handleChange}
					name='password'
					required
				/>
				<input type="submit" value="save" />
			</form> */}
			{/* <>
				{users.length > 0 && (
					users.map((user,index) => <p key={index}>{user}</p>)
				)}
			</> */}
			<h1>Your choise is: {value}</h1>
			<select ref={selectRef} name="languages" id="languages" onChange={handleChange} defaultValue="react">
				<option value="html">Html</option>
				<option value="css">CSS</option>
				<option value="js">javascript</option>
				<option value="react" >React.js</option>
			</select>
		</div>
	)
}
