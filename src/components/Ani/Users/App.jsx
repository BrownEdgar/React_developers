// import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home" 
import Users from "./pages/Users" 
import Layout from "./pages/Layout"
import ROUTES from "./routes/routes" 
import UserInfo from "./pages/UserInfo";


import "./App.scss"

export default function App() {

	return (
		<div>

			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<Home />} />
                    <Route path={ROUTES.USERS} element={<Users />} />
					<Route path={ROUTES.USERINFO} element={<UserInfo />} />
				</Route>

			</Routes>
		</div>
	)
}
