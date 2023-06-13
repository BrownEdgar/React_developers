import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from '../features/todo/todoSlice'


export const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export default store;