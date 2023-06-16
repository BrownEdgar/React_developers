import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = [
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
		name: "Լեվոն",
		favoritColor: 'purple',
	},
	{
		id: 8,
		name: "Էդգար",
		favoritColor: 'white',
	},
	{
		id: 9,
		name: "Էդգար",
		favoritColor: 'pink',
	},
]

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {

	}
})


export function selectAllUsers(state) {
	return state.users
}
export function selectFilter(state) {
	return state.filter
}



export const selectUsersByFavoriteColor = createSelector(
	[selectAllUsers, selectFilter],
	(users,filterColor) => {
		
		if (filterColor.length === 0) return users;
		return users.filter(user => filterColor.includes(user.favoritColor))
	}
)

export default usersSlice.reducer;
