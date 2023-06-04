import { createStore } from 'redux'

const initialState = {
	count: 11,
	name: 'anna',
	data: ['assignment', 'architecture', 'art'],
	result: null,
	lastAction: null,
	lastModified: null
}

function rootReducer(state, action) {
	switch (action.type) {

		case 'checkNumber': return checkNumber(state)

		case 'checkPalindrome': return checkName(state)

		case 'checkData': return arrCheck(state)

		default: return state
	}


}


function checkNumber(state) {
	for (let i = 2; i < state.count / 2; i++) {
		if (state.count % i === 0) {
			return { ...state, result: false }
		}
	}
	return { ...state, result: true }
}



function checkName(state) {
	for (let i = 0; i < state.name/2; i++) {
		console.log(state.name.length - 1 - i)
		if (state.name[i] !== state.name[state.name.length - 1 - i]) {
			return { ...state, result: false }
		}
	}
	return { ...state, result: true }
}

function arrCheck(state) {
	const letter = state.data[0][0]
	const answer = state.data.every(elem => {
		return elem[0] == letter
	})
	return { ...state, result: answer }
}


const store = createStore(rootReducer, initialState)

export default store