import React, { useReducer, useState } from 'react';
import { initialState } from './reducer';
import reducer from './reducer';
import TodoList from './TodoList';
import './App.scss';

export default function App  () {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [jsonData, setJsonData] = useState('');

  const addTodo = () => {
    const newTodo = {
      userId: 1,
      id: Date.now(),
      title: 'New Todo',
      completed: false,
    };
    dispatch({ type: 'addTodo', todo: newTodo });
  };

  const allDone = () => {
    dispatch({ type: 'allDone' });
  };

  const toJson = todos => {
    return JSON.stringify(todos);
  };

  const handleToJson = () => {
    const jsonString = toJson(todos);
    setJsonData(jsonString);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="btns">
        <button className="add-button" onClick={addTodo}>
          Add Todo
        </button>
        <button className="done-button" onClick={allDone}>
          Mark All as Done
        </button>
        <button className="to-json-button" onClick={handleToJson}>
          To JSON
        </button>
      </div>
      <TodoList todos={todos} dispatch={dispatch} />
      {jsonData && (
        <div className="json-data">
          <h2>JSON Data</h2>
          <pre>{jsonData}</pre>
        </div>
      )}
    </div>
  );
};
