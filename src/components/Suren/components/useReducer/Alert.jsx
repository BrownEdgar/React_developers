import React from 'react'
import PropTypes from 'prop-types'


import "./Alert.css"

export default function Alert({ message, notification }) {
	return (
		<div className={`Alert ${notification ? "active" : ''}`}>
			<p>{message}</p>
		</div>
	)
}


Alert.propTypes = {
	message: PropTypes.string.isRequired,
	notification: PropTypes.bool.isRequired
}