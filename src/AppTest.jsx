import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAction, selectAllActions, sortPowers } from './features/test/testSlice'

import "./AppTest.css"


export default function AppTest() {

    const actions =  useSelector(selectAllActions)
    const dispatch = useDispatch()


    const actionAdder = () => {
        const newAction = {
            id: 5,
            action: "copy",
            power: 5,
            time: "0.1s"
        }
        dispatch(addAction(newAction))
    }
     const powerSorter = () => {
        dispatch(sortPowers)
     }
  return (
    <div className="container">
         <div className="btns">
            <button onClick={powerSorter}>Sort powers</button>
            <button>Sort times</button>
            <button>Find the biggest power</button>
            <button onClick={actionAdder} >Add new action</button>
        </div>
        <div className='actions'>
            {actions.map(action => {
                return <div className='action'>
                            <h1>Action number {action.id}</h1>
                            <h2 key={action.id}>Action's name: {action.action}</h2>
                            <h3 key={action.id}>Power: {action.power}</h3>
                            <h3 key={action.id}>Time: {action.time}</h3>
                        </div>
                }
            )}
    </div>
       
    </div>
  )
}
