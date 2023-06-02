import { createSlice } from "@reduxjs/toolkit";


const initialUeersValue = {
	data: ['Anahit'],
	result: ''
}

const usersSlice = createSlice({
	name: 'users',
	initialState: initialUeersValue,
	reducers: {
		addUser(state,action){
			state.data.push(action.payload.username)
			return state
		},
		deleteUser(state,action){
			const x = state.data.filter(user => user.toLowerCase() !== action.payload.username.toLowerCase())
			return {
				...state,
				data: x
			}
		},
		resetUser(){
			return initialUeersValue
		}
	},
	// extraReducers
})

export const { addUser, deleteUser, resetUser } = usersSlice.actions;
export default usersSlice.reducer;



// export default function usersReducer(state = initialUeersValue, action) {
// 	switch (action.type) {
// 		case ADD_USER: return { ...state, data: [...state.data, action.payload.username]}
// 		case DELETE_USER: return { ...state, data: state.data.filter(user => user.toLowerCase() !== action.payload.username.toLowerCase()) }
		
// 		case RESET_USER: return initialUeersValue;
// 		default: return state;
// 	}
// }

// // action creater
// export function addUserAction(username) {
// 	return { type: ADD_USER, payload: {  username } }
// }
// export function deleteUserAction(username) {
// 	return { type: DELETE_USER, payload: {  username } }
// }

