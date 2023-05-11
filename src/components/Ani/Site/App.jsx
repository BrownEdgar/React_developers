import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";

import "./App.scss"
import LogIn from "./pages/LogIn";
import Registration from "./pages/Registration";
import { Route, Routes } from 'react-router-dom';

export default function App() {
	const [users, setUsers] = useState([])
    const saveUsers = (user) => {
        setUsers([...users, user])

    }
   

	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<LogIn  />}/>
				<Route path='/registration' element={<Registration saveUsers={saveUsers} />}/>
			</Routes>
		</div>
	)
}