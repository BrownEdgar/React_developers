import React from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../routes/routes'

export default function Home({ users, deleteUser, togglePassword }) {

	const navigate = useNavigate()
	return (
		<div className='Users'>
			<div className='info'>
				<button className='add' onClick={() => navigate(ROUTES.ADDUSER)}>add new user</button>
				<p>Users: {users.length}</p>
			</div>
			<table>
				<tr>
					<th>id</th>
					<th>firstname</th>
					<th>lastname</th>
					<th>email</th>
					<th>password</th>
					<th>delete</th>
				</tr>
				{
					users.length > 0 && users.map(user => {
						return <tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.firstname}</td>
							<td>{user.lastname}</td>
							<td>{user.email}</td>
							<td className='pass'>
								<span>{user.isShow ? user.password : "*".repeat(user.password.length)}</span>
								<button onClick={() => togglePassword(user.id)}>{user.isShow ? "hide" : "show" }</button>
							</td>
							<td><span className='del-btn' onClick={() => deleteUser(user.id)}>&#10006;</span></td>
						</tr>
					})
				}
			</table>
		</div>
	)
}
