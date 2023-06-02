import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addCountAction } from './store/features/countSlice';
import { addUser } from './store/features/usersSlice';



export default function App() {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const addUsera = () => { 
		dispatch(addUser({ username :'karine'}))
		
	}
	const addCount = () => { 
		dispatch(addCountAction(1))
	}

	return (
		<div>
			<pre>
				{JSON.stringify(state, null, 1)}
			</pre>
			<button onClick={addUsera}>add user</button>
			<button onClick={addCount}>add count</button>
		</div>
	)
}
