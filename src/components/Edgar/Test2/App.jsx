import React, { useState, useEffect } from 'react'

export default function App() {
	const [data, setData] = useState([])


	useEffect(() => {
		const handleClick = (e) => {
			console.log("ok")
		}
		window.addEventListener('mousemove', handleClick)
		return () => window.removeEventListener('mousemove', handleClick)
	}, [])

	return (
		<div>
			{
				data.map((elem, index) => <p key={index}>{elem}</p>)
			}
		</div>
	)
}
