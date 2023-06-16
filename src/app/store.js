import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import countSlice from '../features/count/countSlice'
import usersSlice from '../features/users/usersSlice'
import filterSlice from '../features/filter/filterSlice'
import todosReducer from '../features/todos/todosSlice'


const rootReducer = combineReducers({
	count: countSlice,
	users: usersSlice,
	filter: filterSlice,
	todos: todosReducer
})

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['todos'],
	blacklist: ['count', 'users', 'filter']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export let persistor = persistStore(store)