import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: "test",
    initialState: [
    {
        id: 1,
        action: "read",
        power: 54,
        time: "0.5s"
    },
    {
        id: 2,
        action: "create",
        power: 25,
        time: "0.4s"
    },
    {
        id: 3,
        action: "delete",
        power: 8,
        time: "0.1ms"
    },
    {
        id: 4,
        action: "update",
        power: 31,
        time: "0.36s"
    },
],
    reducers: {
        addAction (state,action) {
            state.push(action.payload)
        },
        // sortPowers(state, action) {
        // }
    }
})

export function selectAllActions (state) {
    return state.test;
}



export const {addAction, sortPowers} = testSlice.actions;
export default testSlice.reducer;