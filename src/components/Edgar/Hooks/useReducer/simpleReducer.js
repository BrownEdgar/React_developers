export const initialState = 0;

export default function reducer(state = initialState, action) {
	 console.log(action)
	switch (action.type) {
		case 'plus': return state + 1;
		case 'minus': return state - 1;
		case 'add-five': return state + action.payload;
		case 'reset': return 0;
	
		default: return state;
	}

}