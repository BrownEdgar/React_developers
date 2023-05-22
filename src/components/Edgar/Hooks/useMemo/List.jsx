import React, { memo } from 'react'

function List({ todos, handleDelete }) {

	console.log("list rendered...")
	return (
		<ul>
				{
				todos.map(elem => <li 
					key={elem.id} 
					onClick={() => handleDelete(elem.id)}
				>
					{elem.title}
				</li>
				)}
		</ul>
	)
}


export default memo(List)