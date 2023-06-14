import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		"userId": 1,
		"id": 1,
		"title": "delectus aut autem",
		"completed": false
	},
	{
		"userId": 1,
		"id": 2,
		"title": "quis ut nam facilis et officia qui",
		"completed": true
	},
	{
		"userId": 1,
		"id": 3,
		"title": "fugiat veniam minus",
		"completed": false
	},
	{
		"userId": 1,
		"id": 4,
		"title": "et porro tempora",
		"completed": true
	},
	{
		"userId": 1,
		"id": 5,
		"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
		"completed": false
	},
]

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		allDone: (state) => {
			state.forEach(todo => {
				todo.completed = true;
			})
		},

		removeById: (state, action) => {
			const id = action.payload;
			return state.filter(todo => todo.id !== id)
		},

		addTodo: (state, action) => {
			const newTodo = action.payload;
			state.push(newTodo);
		}
	}
})

export const { allDone, removeById, addTodo } = todoSlice.actions;
export default todoSlice.reducer