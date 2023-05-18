import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import "./TodoList.scss"

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/todos?_limit=10') 
        .then(response => response.data)
        .then(data => setTodos(data))
        .catch(error => console.error('Error:', error));
    }, []);

  const sortByCompleted = (completed) => {
    const sortedTodos = todos.filter(todo => todo.completed === completed);
    setTodos(sortedTodos);
  };

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      <div className='btns'>
      <button onClick={() => sortByCompleted(true)}>Completed</button>
      <button onClick={() => sortByCompleted(false)}>Uncompleted</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
};

export default TodoList;

