import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchProducts from "./productsAPI";


const initialProductsValue = {
	data: [],
	result: ''
}

export const getAsyncProducts = createAsyncThunk(
	'products/getAsync',
	async (url) => {
		const products = await fetchProducts(url)
		return products;
	})

const productsSlice = createSlice({
	name: 'products',
	initialState: initialProductsValue,
	reducers: {

	},
	extraReducers: (builder) => {
	builder
		.addCase(getAsyncProducts.pending, (state) => {
			state.result = 'pending'
			return state;
		})
		.addCase(getAsyncProducts.fulfilled, (state,action) => {
			console.log(action)
			state.data = action.payload?.products || [];
			state.result = 'success'
			return state;
		})
		.addCase(getAsyncProducts.rejected, (state) => {
			state.result = 'failure'
			return state;
		})
	}
})


export default productsSlice.reducer;