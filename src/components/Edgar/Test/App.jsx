import React, { useState, useEffect, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
// import Home from './pages/Home';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';
import ROUTES from './routes/routes';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Post from './pages/Post';
import PrivateRoutes from './pages/PrivateRoutes';

const Home = lazy(() => import('./pages/Home'))
import "./App.scss"


export default function App() {
	const [users, setUsers] = useState([])

	const addUser = (user) => {
		setUsers([...users, user])
	}

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
	
	return (
		<div>

			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route element={<PrivateRoutes />}>
						<Route index element={<Home 
							users={users} 
							deleteUser={deleteUser} 
							togglePassword={togglePassword}
						/>} />
						<Route path={ROUTES.ADDUSER} element={<About addUser={addUser} />} />
					</Route>
					<Route path={ROUTES.BLOG} element={<Blog />} />
					<Route path={ROUTES.POSTS} element={<Posts />} />
					<Route path='posts/:id' element={<Post />} />
					<Route path={ROUTES.LOGIN} element={<Login />} />
					<Route path='*' element={<ErrorPage />} />
				</Route>



			</Routes>
		</div>
	)
}
