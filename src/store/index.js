import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../features/todos/todoSlice'

const store = configureStore({
    reducer: {
        todo: todoSlice
    },
})

export default store;