import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer'

import "./App.css"
import axios from 'axios'

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleClick = () => {
			axios('https://jsonplaceholder.typicodecom/users')
			.then(res => {
				dispatch({type: 'add-users', payload: res.data})
			})
			.catch(err => {
				dispatch({type: "failure"})
			})
	}


	return (
		<div>
			<button onClick={handleClick}>add users</button>
			{
				state.status === "fail"
				? <h1>something went wrong</h1>
				: <h1>State: {JSON.stringify(state.users, null, 3)}</h1>
			}


		</div>
	)
}
