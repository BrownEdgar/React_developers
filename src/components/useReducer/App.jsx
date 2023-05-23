import React, { useReducer } from 'react'
import reducer, { allDone, initialState } from './reducer'
import './App.scss'



export default function App() {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const completedAll = () => {
        dispatch({type:'completed-all'})
    }

    // const deleteButton = () => {
    //     const id = state.id
    //     dispatch({type:'remove-id', payload:id})
    //     console.log(initialState.id);

    // }


    return (
		<div>   
            <ul>
                {initialState.map(todo => {
                   return ( <li key={todo.id}>
                        <p>Id: {todo.id}</p>
                        <h2>Title: {todo.title}</h2>
                        <p>Completed: {todo.completed}</p>
                        {/* <button onClick={deleteButton}>Remove</button> */}
                    </li>
                )
                })}
                <button onClick={completedAll}>Complete All</button>
            </ul>
        </div>
	)
}






