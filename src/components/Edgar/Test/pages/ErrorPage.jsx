import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
	return (
		<div className='errorPages'>
			<h2 >
				404 | page not found 😶
			</h2>
			<Link to="/">go home</Link>
		</div>
	)
}
