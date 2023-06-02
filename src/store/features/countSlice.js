import { ADD_COUNT } from "../actions/count-actions";

const initialCountValue = 0;

export default function countReducer(state = initialCountValue, action) {

	switch (action.type) {
		case ADD_COUNT: return state + action.payload
		default: return state
		
	}
}

export const addCountAction = (n) => { 
	return { type: ADD_COUNT, payload: n}
}
