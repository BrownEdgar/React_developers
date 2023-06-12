import { createSlice } from "@reduxjs/toolkit";



const usersSlice = createSlice({
	name: "users",
	initialState: [{
		id:1,
		name: "Vardan"
	}],
	reducers: {

	}
}) 

export default usersSlice.reducer;
