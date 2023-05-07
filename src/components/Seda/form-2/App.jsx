import { useState ,  useRef ,  useEffect} from 'react'
import './App.scss'

function App() {
  const [value, setValue] = useState({
    firstName:"",
    lastName:"",
    email:"",
    telephone:"",
    city:""
  })
 
  const selectRef = useRef(null)
  useEffect(() =>{
      setValue({...value ,select: selectRef.current.value})
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  }
  const handleChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }
  return (
   <div className='App'>
      <h1>Personal info</h1>
      <p>Mussum ipsum caclids, vidis litro abertis.</p>
      <form onSubmit={handleSubmit}>
          <div className='inputText'>
            <p>First name</p>
            <input 
            type="text"
            name='firstName'
            value={value.name}
            onChange={handleChange}
            required />
          </div>

          <div className='inputText'>
            <p>Last name</p>
            <input 
            type="text"
            name='lastName'
            value={value.lastName}
            onChange={handleChange}
            required />
          </div>

          <div className='inputText'>  
            <p>Email</p>
            <input 
            name='email'
            type="email"
            value={value.phone}
            onChange={handleChange}
            required />
          </div>

          <div className='inputText'>
            <p>Telephone</p>
            <input 
            name='telephone'
            type=""
            value={value.phone}
            onChange={handleChange}
            required />
          </div>     
      </form>


      <h1>Pick Up info</h1>
      <p>Mussum ipsum caclids, vidis litro abertis.</p>

      <form > 
          <select 
            name="select" 
            id="select" 
            ref={selectRef}
            defaultValue="option0"  
            onChange={handleChange} >
          <option  value='option0'>Select your country</option>
            <option value="Armenia">Armenia</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Russia">Russia</option>
            <option value="France">France</option>
          </select>

          <div className='inputText'>
            <p>City</p>
            <input 
            name='city'
            type="text"
            value={value.city}
            onChange={handleChange}
            required />
          </div>

          <div className='btnDiv'>
            <button type='submit' >SEND</button>
          </div>
      </form>
     
   </div>
  )
}

export default App
