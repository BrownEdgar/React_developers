import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ROUTES from './routes/routes';
import Layout from './pages/Layout';
import './App.scss'
import Users from './pages/Users';
import User from './pages/User';
import Modal from './Modal/Modal';
import axios from 'axios';



export default function App() {
	const [users, setUsers] = useState([]);
	const [isOpen, setIsOpen] = useState(false)
	const [deletedById, setDeletedById] = useState(null)

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')
			.then(res => setUsers(res.data));
	}, []);



	const deleteUser = (id) => {
		setUsers(users.filter(user => user.id !== id))
	}
	const togglePassword = (id) => {
		console.log(id)
		const user = users.map(elem => {
			if (elem.id === id) {
				elem.isShow = !elem.isShow;
			}
			return elem
		});
		setUsers(user)

	}

	const toggleModal = (e, id) => { 
		e.preventDefault()
		if (id) {
			setDeletedById(id)
		}
		setIsOpen(!isOpen)
	}

	const handleDelete = () => {
		const result = users.filter(user => user.id !== deletedById)
		console.log(result)
		setUsers(result)
		setIsOpen(!isOpen)
	}
	return (
		<div>
	{
		isOpen && (
					<Modal toggleModal={toggleModal} withCloseButton={false} theme={'red'} title="lorem ipsum">
						
						<button onClick={toggleModal}>cancel</button>
						<button onClick={handleDelete}>delete</button>
					</Modal>
		)
	}
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<Home users={users} deleteUser={deleteUser} togglePassword={togglePassword} />} />
					<Route path={ROUTES.ADDUSER} element={<About/>} />
					<Route path={ROUTES.BLOG} element={<Blog />} />
					<Route path={ROUTES.USERS} element={<Users 
						users={users}
					toggleModal={toggleModal}/>} />
					<Route path='users/:id' element={<User />} />

				</Route>
			</Routes>
		</div>
	)
}
