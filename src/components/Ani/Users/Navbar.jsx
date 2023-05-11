import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from "./routes/routes" 


export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to={ROUTES.HOME}>Home</Link>
					</li>
					<li>
						<Link to={ROUTES.USERS}>Users</Link>
					</li>
					<li>
						<Link to={ROUTES.USERINFO} >User Information</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
