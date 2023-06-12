import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import addCountFetchAPI from "./CountAPI";



export const addCountAsync = createAsyncThunk(
	'count/async',
	async () => {
		return addCountFetchAPI()
	}
)


const countSlice = createSlice({
	name:"count",
	initialState: [],
	reducers:{
		addCount:(state)=>{
			return state + 1
		}
	},
	extraReducers: (builder) => {
		builder.addCase(addCountAsync.fulfilled, (state,action) => {
			console.log(action)
			return state = action.payload;
		})
	},
})

export const { addCount } = countSlice.actions
export default countSlice.reducer;
