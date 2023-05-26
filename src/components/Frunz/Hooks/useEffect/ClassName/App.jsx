import React,{useState} from 'react'
import classNames from 'classNames'
export default function App() {
    const [isShow,setIsshow]=useState(false)
    const [theme,setTheme]=useState('dark')
  return (
    <div className={classNames('box',{'box-dark':isShow})}>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit velit inventore dignissimos hic quaerat atque!</p>
        <button></button>
    </div>
  )
}
