import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Users from "./pages/Users"
import User from "./pages/User"
import ROUTES from "./routes/routes";
import "./Users.scss"


export default function App() {
	return (
		<div>
			<Routes>
				<Route path={ROUTES.HOME} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={ROUTES.USERS} element={<Users />} />
					<Route path={ROUTES.USER} element={<User />} />
				</Route>
			</Routes>
		</div>
	)
}