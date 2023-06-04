import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { addUser, delIdFunction, delNameFunction, getUser, sortByNames } from "./store/features/usersSlice";



export default function App() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const delId = () => {
        dispatch(delIdFunction(4))
    }

    const delName = () => {
        dispatch(delNameFunction("Tobit"))
    }

    const userAdd = () => {
        dispatch(addUser({
            "id":1,
            "username": "Katty",
            "login": "katty4",
            "email": "katt0@smugmug.com",
            "gender": "Female",
            "address": "Room 262"
        }))
    }

    const getUser2 = () => {
        dispatch(getUser("Vella"))
    }

    const sortUsers = () => {
        dispatch(sortByNames)
    }

    return (
        <div>
            <button onClick={delId}>Delete by id</button>
            <button onClick={delName}>Delete by name</button>
            <button onClick={userAdd}>Add user</button>
            <button onClick={getUser2}>Get user</button>
            <button onClick={sortUsers}>Sort Users</button>
            <pre>
                {JSON.stringify(state, null, 1)}
            </pre>
        </div>
    )
}