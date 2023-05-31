import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/usersSlice';
import countReducer from './features/countSlice';



const store = configureStore({
	reducer: {
		users: usersReducer,
		count: countReducer
	}
});


export default store;