import React from 'react'

import './Posts.css'

export default function Posts({ posts, handleDelete }) {
	return (
		<div className='Posts'>
			{
				posts.map(elem => {
					return (
						<div key={elem.id} className='Posts-Item'>
							<span className='del-btn' onClick={() => handleDelete(elem.id)}>X</span>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>
						</div>
					)
				})
			}
		</div>
	)
}
