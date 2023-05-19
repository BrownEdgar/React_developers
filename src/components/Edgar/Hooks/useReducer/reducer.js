export const initialState = {
	users: [],
	actionCount: 0,
	lastModified: null,
	status: 'idle',
	
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'add-users': return addUsers(state, action)
		case 'failure': return { ...state, status: "fail" }

		default: return state
	}

}

function addUsers(state, action) {
	return {
		actionCount: state.actionCount + 1,
		lastModified: new Date(),
		users: action.payload,
		status: 'success'
	}

}