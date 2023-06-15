import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { alldone, removeById, addTodo} from './features/todos/todoSlice';

import './features/todos/todo.scss'

export default function App() {
	const todo = useSelector((state) => state.todo)
	const dispatch = useDispatch();

	const setAllDone = () => {
        dispatch(alldone());
      };

      const getRemoveById = (id) => {
        dispatch(removeById(id));
      };

      const hendleAddTodo = (todo) => {
        dispatch(addTodo(todo));
      };

	  const toJson = () => {
        return JSON.stringify(todo)
      };

	  const todosTitle = () => {
        return (
          <ul>
            {todo.map(todo => (
              <li key={todo.id}> {todo.title} </li>
            ))}
          </ul>
        );
      };

  return (
	<div>
		<button onClick={setAllDone}> All done </button>
        <button onClick={() => getRemoveById(1)}> Remove </button>
        <button onClick={() => hendleAddTodo( {
            "userId": 1,
            "id": 5,
            "title": "delectus",
            "completed": true
        })}> Add </button>
		<div>{toJson()}</div>
		{todosTitle()}
	</div>
  )
}

