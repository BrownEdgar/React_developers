import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allDone, removeById, addTodo } from './app/features/todoSlice';
import "./App.scss"


export default function App() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAllDone = () => {
        dispatch(allDone());
      };
    
      const handleRemoveById = (id) => {
        dispatch(removeById(id));
      };
    
      const handleAddTodo = (todo) => {
        dispatch(addTodo(todo));
      };
    
      const toJson = () => {
        return JSON.stringify(todos);
      };
    
      const drawTodos = () => {
        return (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        );
      };
    
  return (
    <div className='App'>
    <button onClick={handleAllDone}>All Done</button>
    <button onClick={() => handleRemoveById(1)}>Remove by ID</button>
    <button onClick={() => handleAddTodo({ id: 3, title: "New Todo", completed: false })}>Add Todo</button>
    <h1>HOMEWORK</h1>
    <div>{toJson()}</div>
    {drawTodos()}
  </div>
  )
}
