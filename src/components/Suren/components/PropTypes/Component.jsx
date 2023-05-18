import React from 'react'
import PropTypes from 'prop-types'
import './App.scss';
import './Component.scss'


export default function Component(props) {
	return (
		<div className='flex'>
		 {
			props.data.map(elem => {
				return <div key={elem.id} onClick={() => props.todoToggle(elem.id)}>
					<h2>{elem.title}</h2>
					<span className={`${elem.completed ? "completed" : ""}`}></span>
				</div>
			} )
		 }
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
	todoToggle: PropTypes.func.isRequired
}