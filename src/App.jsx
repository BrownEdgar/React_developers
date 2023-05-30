import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'



function App() {
	
	const data = useSelector((state) => state)
  	const dispatch = useDispatch()
	
	const checkNumber = () => {
		dispatch({type:'checkNumber'})
	}

	const checkPalindrome = () => {
		dispatch({type: 'checkPalindrome'})
	}

	const checkData = () => {
		dispatch({type: 'checkData'})
	}
	
	return (
		<div>
      		<h1>My state. <ul>
							<li>
								count:{JSON.stringify(data.count)}
							</li>
							<li>
								name:{JSON.stringify(data.name)}
							</li>
							<li>
								data:{JSON.stringify(data.data)}
							</li>
							<li>
								result:{JSON.stringify(data.result)}
							</li>
							<li>
								last action:{JSON.stringify(data.lastAction)}
							</li>
							<li>
								last modified:{JSON.stringify(data.lastModified)}
							</li>
					</ul>
					</h1>
			<button onClick={checkNumber}>Is the number simple?</button>
			<button onClick={checkPalindrome}>Is the name palindrome?</button>
			<button onClick={checkData}>check data</button>
		</div>
	)
}

export default App
