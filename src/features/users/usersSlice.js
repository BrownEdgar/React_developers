import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: "users",
    initialState: [
        {
            id: 1,
            name: "Մարիամ",
            favoriteColor: "white"
        },
        {
            id: 2,
            name: "Անի",
            favoriteColor: "yellow"
        },
        {
            id: 3,
            name: "Հայկուհի",
            favoriteColor: "purple"
        },
        {
            id: 4,
            name: "Հակոբ",
            favoriteColor: "white"
        },
        {
            id: 5,
            name: "Մանե",
            favoriteColor: "green"
        },
        {
            id: 6,
            name: "Մերի",
            favoriteColor: "purple"
        },
        {
            id: 7,
            name: "Աննա",
            favoriteColor: "white"
        },
        {
            id: 8,
            name: "Արփի",
            favoriteColor: "pink"
        },
        {
            id: 9,
            name: "Հայկ",
            favoriteColor: "yellow"
        },
        {
            id: 10,
            name: "Արեն",
            favoriteColor: "green"
        },
        {
            id: 11,
            name: "Ինգա",
            favoriteColor: "pink"
        },
        {
            id: 12,
            name: "Արսեն",
            favoriteColor: "yellow"
        },
        {
            id: 13,
            name: "Լևոն",
            favoriteColor: "blue"
        },{
            id: 14,
            name: "Մելիք",
            favoriteColor: "coral"
        },
        {
            id: 15,
            name: "Կարեն",
            favoriteColor: "orange"
        },
        {
            id: 16,
            name: "Կարինե",
            favoriteColor: "green"
        },
        {
            id: 17,
            name: "Դալիթա",
            favoriteColor: "blue"
        },
        {
            id: 18,
            name: "Սեդա",
            favoriteColor: "white"
        },
        {
            id: 19,
            name: "Սիրարփի",
            favoriteColor: "yellow"
        },
        {
            id: 20,
            name: "Սևակ",
            favoriteColor: "purple"
        },
        {
            id: 21,
            name: "Հասմիկ",
            favoriteColor: "white"
        },
        {
            id: 22,
            name: "Մելինե",
            favoriteColor: "green"
        },
        {
            id: 23,
            name: "Գոհար",
            favoriteColor: "purple"
        },
        {
            id: 24,
            name: "Ալլա",
            favoriteColor: "white"
        },
        {
            id: 25,
            name: "Նարինե",
            favoriteColor: "pink"
        },
        {
            id: 26,
            name: "Քրիստինե",
            favoriteColor: "yellow"
        },
        {
            id: 27,
            name: "Անուշ",
            favoriteColor: "green"
        },
        {
            id: 28,
            name: "Սյուզաննա",
            favoriteColor: "pink"
        },
        {
            id: 29,
            name: "Տաթև",
            favoriteColor: "yellow"
        },
        {
            id: 30,
            name: "Գուրգեն",
            favoriteColor: "blue"
        },{
            id: 31,
            name: "Աիդա",
            favoriteColor: "coral"
        },
        {
            id: 32,
            name: "Նարեկ",
            favoriteColor: "orange"
        },
        {
            id: 33,
            name: "Գայանե",
            favoriteColor: "green"
        },
        {
            id: 34,
            name: "Սիլվա",
            favoriteColor: "blue"
        },
        {
            id: 35,
            name: "Լիլիթ",
            favoriteColor: "white"
        },
        {
            id: 36,
            name: "Ռիմմա",
            favoriteColor: "yellow"
        },
        {
            id: 37,
            name: "Լուսինե",
            favoriteColor: "purple"
        },
        {
            id: 38,
            name: "Դիանա",
            favoriteColor: "white"
        },
        {
            id: 39,
            name: "Դավիթ",
            favoriteColor: "green"
        },
        {
            id: 40,
            name: "Արևիկ",
            favoriteColor: "purple"
        }
    ],
    reducers: {

    }
})

export function selectAllUsers (state) {
    return state.users
}

export function selectFilter (state) {
    return state.filter
}
    

export const selectUsersByFavoriteColor = createSelector(
    [selectAllUsers, selectFilter],
    (users, filterColor) => {
        if(filterColor === "all") {
            return users
        }
        return users.filter(user => user.favoriteColor === filterColor )
    }
)

export default usersSlice.reducer;

