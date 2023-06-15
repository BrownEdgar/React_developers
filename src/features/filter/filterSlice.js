import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name:"filter",
    initialState: "all",
    reducers: {
        setFilter: (_, action) => action.payload
    }
})


export const { setFilter} = filterSlice.actions
export default filterSlice.reducer