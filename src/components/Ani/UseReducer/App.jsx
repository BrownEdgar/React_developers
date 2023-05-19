// import React, {useReducer} from 'react'
// import reducer, {initialState} from './reducer'

// export default function App() {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     const handleClick = () =>{
//         dispatch({type: 'plus'})
//     }

//     const handleFive = () =>{
//         dispatch({type: 'add-five', payload: 5})

//     }
//   return (
//     <div>
//         <h1>State: {state}</h1>
//         <button onClick={handleClick}>add count</button>
//         <button onClick={handleFive}>add five</button>
//     </div>
//   )
// }

// import React, {useReducer} from 'react'
// import reducer, {initialState} from './reducer'

// export default function App() {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     const handleClick = () =>{
//         dispatch({type: 'add-user', payload: {
//             user: {id: state.users.length + 1, name: "Modrich"}
//         }})
//     }

//     const addCount = () =>{
//         dispatch({type: 'add-count' })
//     }
//   return (
//     <div>
//         <h1>State: {JSON.stringify(state, null, 3)}</h1>
//         <button onClick={handleClick}>add user</button>
//         <button onClick={addCount }>add count</button>
//     </div>
//   )
// }

import React, {useReducer} from 'react'
import reducer, {initialState} from './reducer'
import axios from 'axios'
import "./App.css"

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleClick = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(res => {
                dispatch({type: 'add-posts', payload: res.data})
            })
    }

    const addDeveloper = (e) =>{
        e.preventDefault();
        dispatch({type: "add-developer", payload: e.target.name.value})
    }

    const sortArray = () =>{
        dispatch({type: "sort"})

    }

    const changeId = () =>{
        dispatch({type: "change-id",})

    }


  return (
    <div>
        <h3>State: {JSON.stringify(state, null, 3)}</h3>
        <button onClick={handleClick}>add posts</button>

        <form onSubmit={addDeveloper}>
            <input type="text" name="name" placeholder="name" />
            <button type="submit">add developer</button>
        </form>

        <button onClick={sortArray}>sort</button>

        <button onClick={changeId}>change id</button>



    </div>
  )
}
