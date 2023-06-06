import { createSlice } from "@reduxjs/toolkit";
import { ADD_USER, SORT_NAMES, GET_BY_LOGIN, DEL_BY_ID, DEL_BY_NAME  } from "../actions/userAtions"
import usersData from "./db.json"

const initialUsersValue = {
    users: usersData,
    result: ""
}

// const usersSlice = createSlice({
//     name: 'users',
//     initialState: initialUsersValue,
//     reducers: {
//         

//         }
//     },
// })

export default function usersReducer(state = initialUsersValue, action) {
    switch (action.type) {

        case DEL_BY_ID: return{
            ...state, 
            users: state.users.filter(user => user.id !== action.payload.id )
        };

        case DEL_BY_NAME: return {
            ...state,
            users: state.users.filter(user => user.username !== action.payload.username)
        };

        case ADD_USER: return {
            ...state,
            users: [...state.users, action.payload.user]
        };

        case GET_BY_LOGIN: return {
            ...state,
            result: state.users.find(user => user.login === action.payload.login) || "User not found."
        };

        case SORT_NAMES: return {
            ...state,
            result: state.users.toSorted((a,b) => a.username > b.username)
        };


        default : return state;
    }
}


export function delIdFunction(id) {
    return {
        type: DEL_BY_ID,
        payload: { id }
    }
}

export function delNameFunction(username) {
    return {
        type: DEL_BY_NAME,
        payload: { username }
    }
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: { user }
    }
}

export function getUser(login) {
    return {
        type: GET_BY_LOGIN,
        payload: { login }
    }
}

export function sortByNames() {
    return {
        type: SORT_NAMES
    }
}