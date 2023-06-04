import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from './features/usersSlice';
// import countReducer from './features/countSlice';
import usersReducer from './features/userSlice';
// import countReducer from './features/countSlice'



const store = configureStore({
	reducer: {
		users: usersReducer,
		
	}
});


export default store;