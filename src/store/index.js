import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../features/todos/todoSlice'
import usersSlice from '../features/users/usersSlice'
import filterSlice from '../features/filter/filterSlice'

const store = configureStore({
    reducer: {
        todo: todoSlice,
        users: usersSlice,
        filter: filterSlice
    },
})

export default store;