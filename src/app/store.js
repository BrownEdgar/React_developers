import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
// import  todoSlice  from '../features/todo/todoSlice'
import filterSlice from "../features/filter/filterSlice";
import usersSlice from "../features/users/usersSlice";
import todosSlice from "../features/todos/todosSlice";
import testSlice from "../features/test/testSlice"

const rootReducer = combineReducers({
	// count: countSlice,
	users: usersSlice,
	filter: filterSlice,
	todos: todosSlice,
    test: testSlice
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