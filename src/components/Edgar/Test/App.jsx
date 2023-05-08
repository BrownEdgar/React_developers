import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";

import "./App.scss"
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

export default function App() {
	const [users, setUsers] = useState([])

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/blog' element={<Blog />}/>
				<Route path='*' element={<Navigate to={'/'} />}/>
			</Routes>
		</div>
	)
}
