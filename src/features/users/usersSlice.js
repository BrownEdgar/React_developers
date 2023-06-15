import { createSlice, createSelector } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "users",
    initialState: [
        {
            id: 1,
            name: "Վարդան",
            favoritColor: 'royalblue',
        },
        {
            id: 2,
            name: "Կարինե",
            favoritColor: 'teal',
        },
        {
            id: 3,
            name: "Աշոտ",
            favoritColor: 'orangered',
        },
        {
            id: 4,
            name: "Սեդա",
            favoritColor: 'white',
        },
        {
            id: 5,
            name: "Սուրեն",
            favoritColor: 'black',
        },
        {
            id: 6,
            name: "Էդգար",
            favoritColor: 'brown',
        },
        {
            id: 7,
            name: "Արեն",
            favoritColor: 'purple',
        },
        {
            id: 8,
            name: "Վարուժ",
            favoritColor: 'white',
        },
        {
            id: 9,
            name: "Լիաննա",
            favoritColor: 'black',
        },
        {
            id: 10,
            name: "Գագիկ",
            favoritColor: 'pink',
        },
        {
            id: 11,
            name: "Դավիթ",
            favoritColor: 'royalblue',
        },{
            id: 12,
            name: "Կարեն",
            favoritColor: 'pink',
        },{
            id: 13,
            name: "Նարեկ",
            favoritColor: 'royalblue',
        },{
            id: 14,
            name: "Հակոբ",
            favoritColor: 'pink',
        },{
            id: 15,
            name: "Արամ",
            favoritColor: 'green',
        },{
            id: 16,
            name: "Գոհար",
            favoritColor: 'teal',
        },{
            id: 17,
            name: "Ռազմիկ",
            favoritColor: 'pink',
        },{
            id: 18,
            name: "Աննա",
            favoritColor: 'orangered',
        },
    ],
    reducers: {

    }
})


export function selectAllUsers(state){
    return state.users
}

export function selectFilter(state){
    return state.filter
}


export const selectUsersByFavoriteColor = createSelector(
    [selectAllUsers, selectFilter],
    (users, filterColor) => {
        if(filterColor.length === 0) return users;
        return users.filter(user => filterColor.includes(user.favoritColor))
    }
)

export default usersSlice.reducer;