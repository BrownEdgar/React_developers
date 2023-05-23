import'./TodoList.scss'

export default function TodoList ({ todos, dispatch }) {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch({ type: 'toggleTodo', id: todo.id })}
            />
            <span>{todo.title}</span>
            <button onClick={() => dispatch({ type: 'removeById', id: todo.id })}> X </button>
          </li>
        ))}
      </ul>
    );
  };