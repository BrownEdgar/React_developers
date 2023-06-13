import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, allDone, removeById } from "./features/todo/todoSlice";



export default function App () {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()


    const setAllDone = () => {
        dispatch(allDone())
    }

    const handleRemById = (id) => {
        dispatch(removeById(id))
    }

    const handleAdd = (todo) => {
        dispatch(addTodo(todo))
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

    const newTodo =   {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      }


    return(
        <div className="App">
            <button onClick={setAllDone}> Set all done </button>
            <button onClick={() => handleRemById(3)}> Remove todo by id </button>
            <button onClick={() => handleAdd(newTodo)}> Add new todo </button>
            <h1>TODOS FROM JSONPLACEHOLDER</h1>
            <div>{setToJson()}</div>
            {allTodos()}
        </div>
    )
}