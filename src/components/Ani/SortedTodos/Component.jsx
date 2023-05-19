import React from 'react'
import PropTypes from 'prop-types'

import './Component.css'


export default function Component(props) {
	return (
		<div>
			<div className='sort'>
				<button onClick={() => props.sorteTrue()}>True First</button>
				<button onClick={() => props.sorteFalse()}>False First</button>
			</div>

			<div className='flex'>
				{
					props.data.map(elem => {
						return <div key={elem.id}>
							<div onClick={() => props.todoToggle(elem.id)} >
								<h2>{elem.title}</h2>
								<span className={`${elem.completed ? "completed" : ""}`}></span>
							</div>
							<button onClick={() => props.deleteTodo(elem.id)}>X</button>
						</div>
					})
				}
			</div>
		</div>
	)
}

Component.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			userId: PropTypes.number.isRequired,
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		})
	),
	todoToggle: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}