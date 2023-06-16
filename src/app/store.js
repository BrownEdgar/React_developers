import { configureStore } from "@reduxjs/toolkit";
// import  todoSlice  from '../features/todo/todoSlice'
import filterSlice from "../features/filter/filterSlice";
import usersSlice from "../features/users/usersSlice";


export const store = configureStore({
    reducer: {
        // todo: todoSlice,
        filter: filterSlice,
				users:usersSlice
    }
})

export default store;