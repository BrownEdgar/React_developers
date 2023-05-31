import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addUserAction, deleteUserAction } from './store/features/usersSlice';



export default function App() {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const addUser = () => { 
		dispatch(addUserAction('Karine'))
		dispatch(deleteUserAction('anahit'))
	}

	return (
		<div>
			<pre>
				{JSON.stringify(state, null, 1)}
			</pre>
			<button onClick={addUser}>add user</button>
		</div>
	)
}
