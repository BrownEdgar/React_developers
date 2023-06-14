import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, allDone, removeById } from "./features/todo/todoSlice";



export default function App () {
    const todos = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const setAllDone = () => {
        dispatch(allDone())
    }

    const handleRemById = (id) => {
        dispatch(removeById(id))
    }

    const handleAdd = () => {
			const newTodo = {
				"userId": 1,
				"id": Date.now(),
				"title": "qui ullam ratione quibusdam voluptatem quia omnis",
				"completed": false
			}
			dispatch(addTodo(newTodo))
    }

    const setToJson = () => {
        return JSON.stringify(todos)
    }

    const allTodos = () => {
        return (
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        )
    }




    return(
        <div className="App">
            <button onClick={setAllDone}> Set all done </button>
            <button onClick={() => handleRemById(3)}> Remove todo by id </button>
            <button onClick={handleAdd}> Add new todo </button>
            <h1>TODOS FROM JSONPLACEHOLDER</h1>
            <div>{setToJson()}</div>
            {allTodos()}
        </div>
    )
}