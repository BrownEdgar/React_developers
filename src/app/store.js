import { configureStore } from '@reduxjs/toolkit'
import countSlice from '../features/count/countSlice'
import usersSlice from '../features/users/usersSlice'


export const store = configureStore({
	reducer: {
		count: countSlice,
		users: usersSlice,
	},
})

