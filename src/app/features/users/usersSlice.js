import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name:"users",
    initialState:[
        {
            id:1,
            name:"Vardan Mamikonyan",
            favoriteColor:"red"
        },
        {
            id:2,
            name:"Nazeni Hovhannisyan",
            favoriteColor:"orange"

        },
        {
            id:3,
            name:"Shiker",
            favoriteColor:"pink"

        },
        {
            id:4,
            name:"Shprot",
            favoriteColor:"blue"
        },
        {
            id:5,
            name:"Spitakci Hayko",
            favoriteColor:"black"
        }

    ],
    reducers:{

    }
})

export default usersSlice.reducer;