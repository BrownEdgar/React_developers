import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'

export default function App() {
	const dispatch = useDispatch()
	const handleChange = () =>{
	}
	const users = useSelector(state => state.users)
	return(
		<div>
			<h1>{JSON.stringify(users)}</h1>
			<button onClick={handleChange}>change Count</button>
		</div>
	)
}
