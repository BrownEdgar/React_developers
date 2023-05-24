import React, { useState, useEffect } from 'react';


export default function useFetch({ url, initialValue, limit }) {
	const [data, setData] = useState(initialValue);

	const addPosts = () => {
		const newPost = { userId: 1, id: 101, title: "dsadsa", body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In explicabo eaque id fugit corporis, minus consequatur enim tempore? Temporibus, laborum.' }

		const newData = [...data];
		newData.push(newPost)
	
		setData(newData)
	}

	useEffect(() => {
		const hasLimit = limit ? `?_limit=${limit}` : ''
		fetch(`${url}${hasLimit}`)
			.then(response => response.json())
			.then(json => setData(json))
	}, [])
	

	return [data, addPosts]
}
