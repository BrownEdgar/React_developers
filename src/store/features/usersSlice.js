import { DELETE_BY_ID, DELETE_BY_NAME, ADD_USER, USER_BY_LOGIN, SORT_BY_NAME  } from "../actions/users-actions";
import usersData from './db.json'
const initialUeersValue = {
	users: usersData,
	result: ''
};

export default function usersReducer(state = initialUeersValue, action) {
	switch (action.type) {

		case DELETE_BY_ID: return {...state, users: state.users.filter(user => user.id !== action.payload.id)};

		case DELETE_BY_NAME: return {...state, users: state.users.filter(user => user.username !== action.payload.username)};

		case ADD_USER: return {...state, users: [...state.users, action.payload.user]}

		case USER_BY_LOGIN: return {...state, result: state.users.find(user => user.login === action.payload.login)};

		case DELETE_BY_ID: return {...state, users: state.users.filter(user => user.id !== action.payload.id)};

		case SORT_BY_NAME: return {...state, result: state.users.toSorted((a, b) => a.username - b.username)};
		
		default: return state;
	}
}


export function deleteIdAction(id){
	return {type: DELETE_BY_ID, payload: { id }}
}

export function deleteNameAction(username){
	return {type: DELETE_BY_NAME, payload: { username }}
}

export function addUserAction(user){
	return {type: ADD_USER, payload: { user }}
}

export function getUserAction(login){
	return {type: USER_BY_LOGIN, payload: { login }}
}
export function sortUsersAction(){
	return {type: SORT_BY_NAME}
}

// 1. deleteByID
// 2. deleteByName
// 3. addUser
// 4. GetUserByLOgin
// 5. sortUSerByName