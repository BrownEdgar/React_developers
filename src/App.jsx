import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import './App.css'
import { selectAllUsers, selectUsersByFavoriteColor } from './features/users/usersSlice'
import { resetFilterAction, setFilter } from './features/filter/filterSlice'

 
export default function App() {
  const [currentButtonIndex, setcurrentButtonIndex] = useState([])
  const [count, setCount] = useState(0)
	const dispatch = useDispatch();

  const users = useSelector(selectAllUsers)
  const filteredUsers = useSelector( selectUsersByFavoriteColor)

  const setActiveButtonIndex = (indx, color) => {
    if(!currentButtonIndex.includes(indx)){
      setcurrentButtonIndex(currentButtonIndex.concat(indx));
    }
    dispatch(setFilter(color))
  }
  const resetFilter = () => {
    dispatch(resetFilterAction())
    setcurrentButtonIndex([])
  }
  return (
	<div className='App'>
		<h1>Our Users | count {count}</h1>
    <button onClick={() => setCount(count + 1)}>add count</button>
    <div className="grid">
      <div className="filters">
      <button 
          onClick={resetFilter}
          className={classNames({
            active: currentButtonIndex < 0
          })}>all</button>
        {
          Array.from(new Set(users.map(user => user.favoritColor)))
          .map((color,index) => {
            return (
              <button 
              className={classNames({
                active: currentButtonIndex.includes(index)
              })}
              onClick={() => setActiveButtonIndex(index, color)}
              >{color}</button>
            )
          })
        }
      </div>
        <div className="users">
          {filteredUsers.map(user =>{
            return (
              <article key={user.id} 
              style={{backgroundColor: `${user.favoritColor}`}}
              className={classNames({
                white: user.favoritColor === 'white',
                'white-text': user.favoritColor === 'black',
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

