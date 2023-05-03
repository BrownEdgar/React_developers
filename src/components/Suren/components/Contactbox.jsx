import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function Contactbox() {
    const [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
        select:"option0",
        textarea:""
      })
    
      const selectedRef = useRef(null)
    useEffect(() =>{
      console.log(selectedRef.current.value)
      setData({ ...data, select: selectedRef.current.value });
    },[])
      const handleChange = (e) =>{
        setData({...data,[e.target.name] : e.target.value})
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(data)
    
      }
      return (
        <div className='App'>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Consectetur at nostrum eum molestias modi.</p>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Name' 
         id="name"  name="name"
          value={data.name} 
          required
          onChange={handleChange} />
    
        <input type="email"
        placeholder='Email'
         id="email" name="email"
           value={data.email} 
           required
           onChange={handleChange} />
    
        <input type="tel"
        id="phone" placeholder='Phone'
         name="phone" 
          value={data.phone}
          required 
          onChange={handleChange} />
    
        <select id="select"
        ref={selectedRef} 
        placeholder='Whats your Budget range?' 
        defaultValue="option0"
        required 
        name="select" 
        onChange={handleChange} >
           <option value="option0">What's Your Budget Range?</option>
          <option value="option1">500$</option>
          <option value="option2" >1500$</option>
          <option value="option3">3500$</option>
        </select>
    
        <textarea id="textarea" 
        placeholder='Message'
        rows={7}
        cols={50}
        required
        name="textarea"
            value={data.textarea} 
          onChange={handleChange}>
          </textarea>
    
        <input className='btn' type="submit" value="SEND" />
      </form>
        </div>
        
    );
}
