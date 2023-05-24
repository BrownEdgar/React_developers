import React, { useState, useEffect } from 'react'

import './App.css'

export default function App() {
	const [data, setData] = useState([
		{
			id: 1,
			question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum error ad culpa soluta aliquam numquam.",
			answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias reiciendis praesentium quas.'
		}
	])
	const [isShow, setIsShow] = useState(false)


	const toggleShow = () => { 
		setIsShow(!isShow)
	}

	return (
		<div className='wrap'>
			<div className={`box ${isShow ? 'active' : ''}`}>
				<div className="question">
					<p>{data[0].question}</p>
					<button onClick={toggleShow}>show answer</button>
				</div>
				<div className="answer">
					<p>{data[0].answer}</p>
					<button onClick={toggleShow}>hide answer</button>
				</div>
			</div>
		</div>
	)
}
