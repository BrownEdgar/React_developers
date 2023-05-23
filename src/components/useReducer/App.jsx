import React, { useReducer } from 'react'
import reducer, { allDone, initialState } from './reducer'
import './App.scss'



export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
		<div>   
            <ul>
                {state.map(todo => {
                    <li key={todo.id}>
                        <p>Id: {todo.id}</p>
                        <h2>Title: {todo.title}</h2>
                        <p>Completed: {todo.completed}</p>
                    </li>
                    console.log(todo)
                })}
            </ul>
        </div>
	)
}






