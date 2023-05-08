import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/blog">blog</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
