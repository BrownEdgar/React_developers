import React, { useState, useRef, useEffect } from 'react'
import "./App.scss"

export default function App() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: ""
    })
    const  handleSubmit = (e) => {
        e.preventDefault()
    }
    const  handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    }
     
  return (
    <div className='wrapper'>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <div className='firstLine'>
                <input type="text" placeholder='name' required value={user.name}
                onChange={handleChange} name='name'
                />
                <input type="email" placeholder='Email' required value={user.email}
                onChange={handleChange} name='email'
                />
            </div>
            <div className='secondLine'>
                <input type="number" placeholder='Phone' required value={user.phone}
                onChange={handleChange} name='phone'
                />
                <select name="budget" id="budget" required onChange={handleChange}>
                    <option value="unknown">What's your budget range</option>
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                    <option value="30000">30000</option>
                </select>
            </div>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"
            onChange={handleChange} value={user.message}
            ></textarea>
            <input type="submit" value='SEND'/> 
        </form>
    </div>
  )
}
