import { NOTIFICATION_HIDE, NOTIFICATION_SHOW } from "./actionTypes";

export const initialState = {
	actions: 0,
	developers: [],
	posts: [],
	arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
	notification: false,
	notifyMessage: ""

}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_POSTS':
			return {
				...state,
				actions: state.actions + 1,
				posts: action.payload,
			};

		case 'ADD_DEVELOPER':
			console.log('ADD_DEVELOPER')
			return {
				...state,
				actions: state.actions + 1,
				developers: [...state.developers, action.payload],
			};

		case 'SORT_ARRAY':
			const sortedArr = state.arr.toSorted((a, b) => a - b);

			return {
				...state,
				actions: state.actions + 1,
				arr: sortedArr,
			};

		case 'DELETE_POST':
			const updatedPosts = state.posts.toSpliced(action.payload, 1);
			return {
				...state,
				actions: state.actions + 1,
				posts: updatedPosts,
			};
		case NOTIFICATION_SHOW:
			console.log('NOTIFICATION_SHOW')
			return { ...state, notification: true, notifyMessage: action.payload.message };
		case NOTIFICATION_HIDE:
			console.log('NOTIFICATION_HIDE')
			return { ...state, notification: false }

		default:
			return state;
	}
}

export function notificationShow(message) {
	return {
		type: NOTIFICATION_SHOW,
		payload: {
			message,
		}
	}
}

export function notificationHide() {
	return { type: NOTIFICATION_HIDE }
}