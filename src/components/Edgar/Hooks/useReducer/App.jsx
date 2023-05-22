import React, { useReducer } from 'react'
import reducer, { addPosts, errorCase, initialState } from './reducer'

import "./App.css"
import axios from 'axios'
import { ADD_USER, FAILURE } from './actionTypes'

const DB_URL = import.meta.env.VITE_DB_URL
const PORT = import.meta.env?.VITE_PORT
console.log(PORT)

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleClick = () => {
		axios(DB_URL)
			.then(res => {
				dispatch(addPosts(res.data))
			})
			.catch(err => {
				dispatch(errorCase())
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
