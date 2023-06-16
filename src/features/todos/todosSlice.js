import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
	name: 'todos',
	initialState: [{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	}],
	reducers: {
		addTodo(state,action) {
			state.push(action.payload)
		}
	}
})

//selectors
export function selectAllTodos(state) {
	return state.todos
}

export default todosSlice.reducer;
export const { addTodo } = todosSlice.actions