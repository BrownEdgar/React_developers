import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: 'filter',
	initialState: [],
	reducers: {
		setFilter: (state, {payload}) => {
			if (!state.includes(payload)) {
				state.push(payload)
			}
		},
		resetFilterAction: () => []
	}
})

export const { setFilter, resetFilterAction } = filterSlice.actions
export default filterSlice.reducer;