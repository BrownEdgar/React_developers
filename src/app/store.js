import { configureStore } from "@reduxjs/toolkit";
// import  todoSlice  from '../features/todo/todoSlice'
import filterSlice from "../features/filter/filterSlice";


export const store = configureStore({
    reducer: {
        // todo: todoSlice,
        filter: filterSlice
    }
})

export default store;