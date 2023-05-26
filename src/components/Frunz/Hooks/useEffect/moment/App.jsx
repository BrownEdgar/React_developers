import React, { useState } from 'react'
import moment from 'moment'

export default function App() {
  const[todos,setTodos]=useState([{
    id:1,
    name:"Clear the room",
    moment:moment().format('MMMM Do,h:mm:ss')
  }])
  const handleSubmit= (e)=>{
    e.preventDefault();
    const{value}= e.target[0].value;
    const newTodo={
      id:new Date(),
      name:value,
      moment:moment().format('MMMM Do ,h:mm:ss')
    }
    setTodos([...todos,newTodo])
    e.target.reset()
  }
  return (
    <div className='box'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='todo' />
        <input type="submit" value="add todo" />
      </form>
      <ul>
        {todos.map(todo =>{
          return <li key={todo.id}>
            <span>{todo.moment.fromnow()}</span>
            <span>{todo.name}</span>
          </li>
        })}
      </ul>
    </div>
  )
}
