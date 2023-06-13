import { createSlice } from "@reduxjs/toolkit";

 const todoSlice = createSlice({
    name: 'todos',
    initialState: [
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
            "completed": false
          },
        {
            "userId": 1,
            "id": 3,
            "title": "delectus aut autem delectus aut autem",
            "completed": true
        },
        {
            "userId": 1,
            "id": 4,
            "title": "delectus aut quis ut nam facilis et autem delectus aut autem",
            "completed": true
        }
        ],
    reducers: {
        alldone(state){
            state.forEach(todo => todo.completed = true)
        },

        removeById(state, action){
            const id = action.payload;
            return state.filter(todo => todo.id !== id)
        },

        addTodo(state, action){
            const newTodo = action.payload;
            state.push(newTodo);
        }
        
    },
 })

 export default todoSlice.reducer;
export const {alldone, removeById, addTodo } = todoSlice.actions