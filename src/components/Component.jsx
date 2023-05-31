import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_NAME } from '../store/actionTypes';

export default function Component() {
	 const friend = useSelector(state => state.friend)
	 const dispatch = useDispatch();

	const changeName = () => { 
		dispatch({type: CHANGE_NAME, payload: "Aria Stark"})
	}
	return (
		<div>
			<h2>My friend name is {friend.name}</h2>
			<button onClick={changeName}>change friend name</button>
		</div>
	)
}
