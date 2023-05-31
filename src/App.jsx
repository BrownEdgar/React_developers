import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Component from './components/Component';
import { PLUS } from './store/actionTypes';

export default function App() {
	const data =  useSelector((state) => state)
	const dipatch = useDispatch();

	const handleClick = () => { 
		dipatch({type: PLUS})
	}

	return (
		<div>
			<h1>Redux PART one  my State : <code>{JSON.stringify(data)}</code></h1>
			<button onClick={handleClick}>change count</button>
			<Component />
			


		</div>
	)
}
