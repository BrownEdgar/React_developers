import { ADD_USER, FAILURE } from "./actionTypes"

export const initialState = {
	users: [],
	actionCount: 0,
	lastModified: null,
	status: 'idle',
	
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER: return addUsers(state, action)
		case FAILURE: return { ...state, status: "fail" }

		default: return state
	}

}

function addUsers(state, action) {
	return {
		actionCount: state.actionCount + 1,
		lastModified: new Date(),
		users: action.payload,
		status: 'success'
	}

}


//action creater
export function addPosts(data) {
	return { 
		type: ADD_USER, 
		payload: data 
	}
}

export function errorCase() {
	return { type: FAILURE }
}

