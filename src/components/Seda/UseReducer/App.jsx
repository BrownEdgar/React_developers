import React, { useReducer } from "react";
import reducer, { initialState } from './Reducer'
import axios from 'axios'
import "./App.scss"




export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleClick = () => {
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            dispatch({type: 'add-posts', payload: res.data})
        })
        .catch(err => {
            dispatch({type: "failure"})
        })
    }

    return (
        <div>
            <h1>State: {JSON.stringify(state)}</h1>
            <button onClick={handleClick}>Get Posts</button>
            {
                state.status === "fail"
                ? <h1>Something went wrong</h1>
                : <h1>State:{JSON.stringify(state.posts, null, 3)}</h1>
            }
        </div>
    )
}