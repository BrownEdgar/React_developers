import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ROUTES from '../routes/routes'

export default function PrivateRoutes() {
	const [login, setLogin] = useState(!!window.localStorage.getItem("isLogin"))
	return (
		<>
			{login ? <Outlet /> : <Navigate to={ROUTES.LOGIN}/>}
		</>
	)
}
