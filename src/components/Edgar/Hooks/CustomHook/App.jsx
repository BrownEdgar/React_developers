import React, { useEffect } from 'react'
import useCustomHook from './CustomHook'
import useFetch from './useFetch'

export default function App() {
	const [count, { reset, incrementBy, decrimentBy }] = useCustomHook(0)
	const [data, addPosts] = useFetch({
		url: 'https://jsonplaceholder.typicode.com/posts',
		initialValue: [],
		limit: 2
	});

	useEffect(() => {
		console.log('ok')
	}, [data])
// ???????????????????


	return (
		<div>
			<h1>Data: {JSON.stringify(data, null, 1)}</h1>
			<button onClick={() => incrementBy(4)}>incrementBy 4</button>
			<button onClick={() => decrimentBy(2)}>decrimentBy 2</button>
			<button onClick={addPosts}>addPosts</button>
		</div>
	)
}
