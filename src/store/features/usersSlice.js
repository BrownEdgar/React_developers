import { ADD_USER, DELETE_USER, RESET_USER } from "../actions/users-actions";
import usersData from './db.json'
const initialUeersValue = {
	users: usersData,
	result: ''
};

export default function usersReducer(state = initialUeersValue, action) {
	switch (action.type) {
		case ADD_USER: return [...state, action.payload.username]
		case RESET_USER: return initialUeersValue;
		case DELETE_USER: return state.filter(user => user.toLowerCase() !== action.payload.username.toLowerCase())

		default: return state;
	}
}

// action creater
export function addUserAction(username) {
	return { type: ADD_USER, payload: {  username } }
}
export function deleteUserAction(username) {
	return { type: DELETE_USER, payload: {  username } }
}

// 1. deleteByID
// 2. deleteByName
// 3. addUser
// 4. GetUserByLOgin
// 5. sortUSerByName