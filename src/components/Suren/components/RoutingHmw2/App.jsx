import React, { useState , useEffect} from 'react';
import { Navigate, Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import ROUTES from './routes/routes';
import Layout from './pages/Layout';
import './App.scss'
import Users from './pages/Users';
import User from './pages/User';



export default function App() {
  const [users, setUsers] = useState([]);
  const addUser = (user) =>{
    setUsers([...users, user])

  }
  const deleteUser = (id) =>{
    setUsers(users.filter(user => user.id !== id))
  }
  const togglePassword = (id) =>{
    console.log(id)
    const user =  users.map(elem =>{
      if (elem.id === id) {
        elem.isShow = ! elem.isShow;
      }
      return elem
    });
    setUsers(user)

  } 
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout/>}> 
        <Route index element={<Home users={users} deleteUser={deleteUser} togglePassword={togglePassword}/>}/>
        <Route path={ROUTES.ADDUSER} element={<About addUser={addUser} />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
					<Route path={ROUTES.USERS} element={<Users />} />
					<Route path='users/:id' element={<User />} />

        </Route>
      </Routes>
    </div>
  )
}
