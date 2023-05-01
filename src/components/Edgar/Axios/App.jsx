import React, { useState, useEffect } from 'react'
import axios from './axios'

export default function App() {
	const [data, setData] = useState({
		posts:[],
		todos:[],
		commets:[]
	})
	const [userId, setUserId] = useState(3)

	useEffect(() => {
		// axios('https://jsonplaceholder.typicode.com/todos?_limit=12')
		// .then(response => setData(response.data))
		async function gitData() {
			// const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=12');
			// setData(response.data)

			// axios({
			// 	method: 'get',
			// 	baseURL: "https://jsonplaceholder.typicode.com",
			// 	url: '/users',
			// 	timeout:1000,
			// }).then(response => setData(response.data))
			const todo = {
				"userId": 1,
				"id": 201,
				"title": "delectus aut autem",
				"completed": false
			}
			//POST REQUESTs
			// axios.post('https://jsonplaceholder.typicode.com/todos', todo)
			// .then(response => console.log(response))
			// .catch(err => console.log(err))

			// 	axios({
			// 		method: 'post',
			// 		url:'https://jsonplaceholder.typicode.com/todos',
			// 		data: todo
			// 	}).then(response => console.log(response))
			// .catch(err => console.log(err))


			// axios('https://jsonplaceholder.typicode.com/todos', {
			// 	params: {
			// 		_limit: 12,
			// 		_start:32
			// 	}
			// }).then(response => console.log(response))
			const userId = 4
			axios.get('/todos', {
				params: {
					_limit: 20,
					_start: (userId * 20) - 20
				}
			}).then(response => {
				setData(response?.data)
			})
		}

		
		gitData()
	}, [])



	return (
		<div>App</div>
	)
}
