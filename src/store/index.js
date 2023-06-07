import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './features/productsSlice';



// const myFirstMiddleWare = (store) => (next) => (action) => {
// 	if (action.type === ADD_USER) {
// 		const state = store.getState()
// 		if (!state.users.data.includes(action.payload.username)) {
// 			next(action)
// 		}
// 	} else {
// 		next(action)
// 	}
// }



const store = configureStore({
	reducer: {
		products: productsSlice,
	}
});


export default store;