const fetchData = () => { 
	return new Promise((resolve) => { 
		const asyncTodos = [
			{
				"id": 10,
				"title": "delectus aut autem",
				"completed": false
			},
			{
				"id": 2,
				"title": "quis ut nam facilis et officia qui",
				"completed": false
			},
			{

				"id": 3,
				"title": "fugiat veniam minus",
				"completed": false
			},
			{

				"id": 4,
				"title": "et porro tempora",
				"completed": true
			},
			{

				"id": 5,
				"title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
				"completed": true
			},

		]
			setTimeout(() => { 
				resolve(asyncTodos)
			 }, 0)
	})
}


export default fetchData