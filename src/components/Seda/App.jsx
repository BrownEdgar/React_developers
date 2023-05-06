import { useState ,  useRef ,  useEffect} from 'react'
import './App.scss'

function App() {
  const [value, setValue] = useState({
    name:"",
    email:"",
    phone:"",
    select:"",
    textarea:""
  })
 
  const selectRef = useRef(null)
  useEffect(() =>{
    console.log(selectRef.current.value)
setValue({...value ,select: selectRef.current.value})
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    setValue({...value, [e.target.name]: e.target.value})
  }
  return (
   <div className='App'>
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit voluptas quis officiis quibusdam voluptatibus!</p>
      <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Name'
            name='name'
            value={value.name}
            onChange={handleChange}
            required />

          <input 
            type="email"
            placeholder='Email'
            name='email'
            value={value.email}
            onChange={handleChange}
            required />

          <input 
            placeholder='Phone'
            name='phone'
            type=""
            value={value.phone}
            onChange={handleChange}
            required />

          <select 
            name="select" 
            id="select" 
            ref={selectRef}
            defaultValue="option0"  
            onChange={handleChange} >
          <option  value='option0'>What is your budget range?</option>
            <option value="0-150000">0-150000</option>
            <option value="150000-300000">150.000-300.000</option>
            <option value="300000-500000">300.000-500.000</option>
            <option value="500000+">500.000 +</option>
          </select>

          <textarea name="textarea"
           id="textarea"
           cols="30"
           rows="10"
           placeholder='Message'
           value={value.textarea}
           required
           onChange={handleChange} ></textarea>

          <button type='submit' >SEND</button>
      </form>
     
   </div>
  )
}

export default App
