import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames"
import { selectUsersByFavoriteColor, selectAllUsers } from "./features/users/usersSlice";
import { setFilter } from "./features/filter/filterSlice";
import './App.css'
// import { addTodo, allDone,  } from "./features/todo/todoSlice";


export default function App() {
	// const todos = useSelector((state) => state.todo)
	const dispatch = useDispatch()
	///////////////  todo functions /////////////////////////////
	// const setAllDone = () => {
	//     dispatch(allDone())
	// }

	// const handleRemById = (id) => {
	//     dispatch(removeById(id))
	// }

	// const handleAdd = () => {
	// 		const newTodo = {
	// 			"userId": 1,
	// 			"id": Date.now(),
	// 			"title": "qui ullam ratione quibusdam voluptatem quia omnis",
	// 			"completed": false
	// 		}
	// 		dispatch(addTodo(newTodo))
	// }

	// const setToJson = () => {
	//     return JSON.stringify(todos)
	// }

	// const allTodos = () => {
	//     return (
	//         <ul>
	//             {todos.map(todo => (
	//                 <li key={todo.id}>{todo.title}</li>
	//             ))}
	//         </ul>
	//     )
	// }

	const users = useSelector(selectAllUsers)
	const filteredUsers = useSelector(selectUsersByFavoriteColor)
	const [currentButtonIndex, setCurrentButtonIndex] = useState(-1)

	const setActiveButtonIndex = (indx, color) => {
		setCurrentButtonIndex(indx)
		dispatch(setFilter(color))
	}

	return (
		<div className="App">

			{///////////// todo-nery nkarum enq ejum
            /* <button onClick={setAllDone}> Set all done </button>
            <button onClick={() => handleRemById(3)}> Remove todo by id </button>
            <button onClick={handleAdd}> Add new todo </button>
            <h1>TODOS FROM JSONPLACEHOLDER</h1>
            <div>{setToJson()}</div>
            {allTodos()} */}

			<h1>our users</h1>
			<div className="grid">


				<div className="filters">
					<button
						onClick={() => setActiveButtonIndex(-1, 'all')}
						className={classNames({
							active: currentButtonIndex < 0
						})}>all</button>
					{
						
						Array.from(new Set(users.map(user => user.favoriteColor)))
							.map((color, index) => {
								return (
									<button
										onClick={() => setActiveButtonIndex(index, color)}
										className={classNames({
											active: currentButtonIndex === index
										})}>{color}</button>
								)
							})
					}

				</div>
				<div className="users">
					{filteredUsers.map(user => {
						return (
							<article
								key={user.id}
								style={{ backgroundColor: `${user.favoriteColor}` }}
								className={classNames({
									white: user.favoriteColor === "white",
									"white-text": user.favoriteColor === "black"
								})}>
								<h2>{user.name.charAt(0)}</h2>
							</article>
						)
					})}
				</div>
			</div>
		</div>
	)
}
