import React, { useState, useEffect } from 'react';
import Component from './Component';
import axios from 'axios';
import './App.scss'

export default function App() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        setData(res.data);
        setSortedData(res.data);
      });
  }, []);

  const todoToggle = (id) => {
    const updatedData = data.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    setData(updatedData);
  }

  const handleSort = (completed) => {
    const sorted = [...data].sort((a, b) => {
      if (completed) {
        return a.completed - b.completed;
      } else {
        return b.completed - a.completed;
      }
    });

    setSortedData(sorted);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <div className='button-container'>
        <button onClick={() => handleSort(true)}>Completed</button>
        <button onClick={() => handleSort(false)}>Uncompleted</button>
      </div>
      <Component data={sortedData} todoToggle={todoToggle} />
    </div>
  );
}
