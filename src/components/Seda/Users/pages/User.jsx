import React,{useState, useEffect} from "react";
import axios from "axios"
import {useParams} from "react-router-dom"

export default function User() {
    const {id} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            setUser(res.data)
        })
    }, [])
    return (
        <div className="User">
            <h1>N {id} User's personal page!</h1>
            <h3>{user.name}</h3>
            <pre>
                {JSON.stringify(user, null, 1)}
            </pre>
        </div>
    )
} 