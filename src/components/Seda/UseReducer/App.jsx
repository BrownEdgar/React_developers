import React, { useReducer } from "react";
import reducer, { initialState } from './Reducer'
import axios from 'axios'
import "./App.scss"



export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleClick = () => {
        axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => {
            dispatch({type: 'add-posts', payload: res.data})
        })
        .catch(err => {
            dispatch({type: "failure"})
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const developer = e.target.name.value;

        dispatch({type:'add-developer', payload: developer})
        e.target.name.value = ""
    }

    const sortClick = () => {
        dispatch({type: 'sort-arr'})
    }

    return (
        <div className="App">
            
            <h1>Actions: {state.actions}</h1>
            <button onClick={handleClick}>Get Posts</button>
            {
                state.status === "fail"
                ? <h1>Something went wrong</h1>
                : <h2>Posts: <p>{JSON.stringify(state.posts, null, 3)}</p></h2>
            }
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="write developer's name here" />
                <button type="submit">add</button>
            </form>
            <div className="developers">
                <h1>Developers: {JSON.stringify(state.developers)}</h1>
                <ul>
                    {state.developers.map((dev, i) => {
                        <li key={i}>{dev}</li>
                    })}
                </ul>
            </div>

            <div className="arr">
                <h1>Array: {JSON.stringify(state.arr)} </h1>
                <button onClick={sortClick}>Sort array </button>
            </div>
        </div>
    )
}