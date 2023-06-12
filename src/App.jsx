import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { addCount, addCountAsync } from './features/count/countSlice'


export default function App() {
	const dispatch = useDispatch()
	const handleChange=()=>{
		dispatch(addCountAsync())
	}
	const users = useSelector(state => state.users)
	return (
		<div>
			<h1>{JSON.stringify(users)}</h1>
			<button onClick={handleChange}>change count</button>
		</div>
	)
}

