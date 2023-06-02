import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './features/usersSlice';
import countReducer from './features/countSlice';
import { ADD_USER } from './actions/users-actions';
import { ADD_COUNT } from './actions/count-actions';


const myFirstMiddleWare = (store) => (next) => (action) => {
	if (action.type === ADD_USER) {
		const state = store.getState()
		if (!state.users.data.includes(action.payload.username)) {
			next(action)
		}
	} else {
		next(action)
	}
}

const mySecondMiddleWare = (store) => (next) => (action) => {
	switch (action.type) {
		case ADD_COUNT:
			const state = store.getState()
			
			if (state.count < 10) {
				return next(action)
			}
			break;

		default: return next(action)
	}
}

const store = configureStore({
	reducer: {
		users: usersSlice,
		count: countReducer
	}
});


export default store;