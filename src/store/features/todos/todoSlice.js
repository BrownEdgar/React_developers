import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchData from "./todoAPI";


export const getAsyncTodos = createAsyncThunk(
	'todos/getAsync',
	async () => {

		const response = await fetchData();
		return response;
	}
)


const todoSlice = createSlice({
	name: 'todos',
	initialState: [{
		id: 1,
		title: "Learn React-redux",
		completed: false
	}],
	reducers: {
		addTodo(state, action) {
			console.log(action)

			state.push(action.payload);
			return state;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getAsyncTodos.pending, (state, action) => {
			 console.log('pending')
		})
		.addCase(getAsyncTodos.fulfilled, (state,action) => {
			state.push(...action.payload);
			return state;
		})
		.addCase(getAsyncTodos.rejected, (state, action) => {
			console.log('rejected', action)
		})
	}
})



export const selectAllTodos = state => state.todos
export const selectAllCompletedTodos = state => state.todos.filter(todo => todo.completed )
export const selectAllUnCompletedTodos = state => state.todos.filter(todo => !todo.completed )



export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;