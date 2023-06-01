import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteIdAction, deleteNameAction, addUserAction, getUserAction, sortUsersAction } from './store/features/usersSlice';



export default function App() {
	const state = useSelector(state => state);
	const dispatch = useDispatch();

	const deleteId = () => {
		dispatch(deleteIdAction(50))
	}

	const deleteName = () => {
		dispatch(deleteNameAction("Charlene"))
	}

	const addUser = () => {
		dispatch(addUserAction({
			"id": 51,
			"username": "Anna",
			"login": "test",
			"email": "test@alexa.com",
			"gender": "Female",
			"address": "Suite 5"
		}))
	}

	const getUser = () => {
		dispatch(getUserAction("Svanetti"))
	}

	const sortUsers = () => {
		dispatch(sortUsersAction())
	}

	return (
		<div>
			<pre>
				{JSON.stringify(state, null, 1)}
			</pre>

			<button onClick={deleteId}>DELETE BY ID</button>
			<button onClick={deleteName}>DELETE BY NAME</button>
			<button onClick={addUser}>ADD USER</button>
			<button onClick={getUser}>GET USER</button>
			<button onClick={sortUsers}>SORT USERS</button>

		</div>
	)
}
