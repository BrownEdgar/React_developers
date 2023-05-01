import { useState, useEffect } from 'react'
import axios from 'axios'


function Homework() {
	const [data, setData] = useState({
		todos: [],
		posts: [],
		comments: []
	})
	const [userId, setUserId] = useState(6)


	function getCommets() {
		const postsIds = data.posts.map(post => post.id)
		axios.get('https://jsonplaceholder.typicode.com/comments').then(res => {
			const myComments = res.data.filter(comment => postsIds.includes(comment.postId));
			console.log(myComments)
			setData({ ...data, comments: myComments })
		})
	}
	useEffect(() => {
		getCommets()
	}, [data.posts])
	

	useEffect(() => {
		function getData() {
			axios.all([
				axios.get('https://jsonplaceholder.typicode.com/todos', {
					params: {
						_limit: 20,
						_start: (userId * 20) - 20
					}
				}),
				axios.get('https://jsonplaceholder.typicode.com/posts', {
					params: {
						_limit: 10,
						_start: (userId * 10) - 10
					}
				}),

			]).then(([todos, posts]) => {
		
				setData({
					...data,
					posts: posts.data,
					todos: todos.data,
				})

			})
		}
		getData()
	}, [])
	console.log(data)
	return (
		<div>
			App
		</div>
	)
}

export default Homework
