import React from 'react'

export default function Component() {

	const sum = () => {
		console.log("calculating...")
		let total = 0;
		for (let i = 0; i <= 1e3; i++) {
			total += i;
		}
		return total;
	}

	return (
		<div>
			<h2>Total: {sum()}</h2>
		</div>
	)
}
