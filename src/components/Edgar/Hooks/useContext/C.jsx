import React, { useContext } from 'react'
import { MyContext } from './Context'

export default function C() {
	 const data = useContext(MyContext);

	return (
		<div>
			<h2>C component value: {JSON.stringify(data)}</h2>
			<button onClick={data.handleClick}>change name</button>

			{/* use only in class Cpmponents */}
			{/* <MyContext.Consumer>
				{ (value) => <p>{JSON.stringify(value)}</p>}
			</MyContext.Consumer> */}

		</div>
	)
}
