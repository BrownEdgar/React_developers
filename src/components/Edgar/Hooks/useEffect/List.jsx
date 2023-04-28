import React from 'react'

export default function List({ todo, toggleTodo }) {
	return (
		<li 
			className={todo.completed ? "done" : ""}
			onClick={() => toggleTodo(todo.id)}	
		>
			{todo.title}
		</li>
	)
}
