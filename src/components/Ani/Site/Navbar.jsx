import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Log in</Link>
					</li>
					<li>
						<Link to="/registration">Registration</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

