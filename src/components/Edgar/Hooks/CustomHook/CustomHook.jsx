import React, { useState } from 'react'

export default function useCustomHook(initialStateValue = 0) {
	const [value, setValue] = useState(initialStateValue);

	const incrementBy = (quantity) => {
		setValue(prevValue => prevValue + quantity)
	}

	const decrimentBy = (quantity) => {
		setValue(prevValue => prevValue - quantity)
	}

	const reset = () => {
		setValue(prevValue => initialStateValue)
	}

	return [value, { reset, incrementBy, decrimentBy }]
}
