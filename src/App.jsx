import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import './App.css'
import { selectAllUsers, selectUsersByFavoriteColor } from './features/users/usersSlice'
import { resetFilterAction, setFilter } from './features/filter/filterSlice'
import Filters from './components/Filters'


export default function App() {
	const [count, setCount] = useState(0);

	const users = useSelector(selectAllUsers)
	const filteredUsers = useSelector(selectUsersByFavoriteColor)

	const dispatch = useDispatch()

	const [currentButtonIndex, setCurrentButtonIndex] = useState([])

	const setActivButtonIndex = (indx, color) => {
		if (!currentButtonIndex.includes(indx)) {
			setCurrentButtonIndex(currentButtonIndex.concat(indx));
		}
		dispatch(setFilter(color))
	}

	const resetFilter = () => {
		dispatch(resetFilterAction())
		setCurrentButtonIndex([])
	}

	return (
		<div className='App'>
			<h1>Our Users | count {count}</h1>
			<button onClick={() => setCount(count + 1)}>add count</button>
			<div className="grid">
				<Filters
					setActivButtonIndex={setActivButtonIndex}
					currentButtonIndex={currentButtonIndex}
					users={users}
					resetFilter={resetFilter}
				/>
				<div className="users">
					{filteredUsers.map(user => {
						return (
							<article
								key={user.id}
								style={{ backgroundColor: `${user.favoritColor}` }}
								className={classNames({
									white: user.favoritColor === 'white',
									'white-text': user.favoritColor === 'black'
								})}
							>
								<h2>{user.name.charAt(0)}</h2>
							</article>
						)
					})}
				</div>
			</div>
		</div>
	)
}

