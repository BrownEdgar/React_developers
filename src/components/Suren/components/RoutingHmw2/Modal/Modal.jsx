import React from 'react'

import "./Modal.scss"

export default function Modal(props) {
	console.log("00000000",props.children)
	return (
		<div className='Modal'>
			<div className="wrapper">
				{props.withCloseButton && <button>x</button>}
				<h2>{props.title}</h2>
				{props.children}
			</div>
		</div>
	)
}
