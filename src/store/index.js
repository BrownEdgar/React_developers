import {createStore} from 'redux'
import { CHANGE_NAME, PLUS } from './actionTypes'

const initialState = {
	count: 16,
	name: "Jhonsnow",
	result: null,
	lastAction: null,
	lastModified: null,
}


function rootReducer(state = initialState,action) {
	switch (action.type) {
		case PLUS:
			return {...state, count: state.count + 1}
		case CHANGE_NAME: return {
			...state,
			friend: {
				...state.friend,
				name: action.payload
			}
		}
		default: return state
	}
}


const store = createStore(rootReducer, initialState)

export default store;


