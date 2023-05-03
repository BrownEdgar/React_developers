import React, { useState } from 'react'
import A from './A'
import { MyContext } from './Context';

export default function App() {
	const [data, setData] = useState(
		[
			{
				id:1,
				name:"hooks",
				year: 2018
			}
		]
	);
	const handleClick = () => { 
		setData("useEffect")
	 }
	return (
		<div>
			<h2>App component</h2>
			<MyContext.Provider value={{ item: data }}>
				<A />
			</MyContext.Provider>
	
		</div>
	)
}
