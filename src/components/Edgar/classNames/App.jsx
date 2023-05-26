import React, { useState } from 'react'
import classNames from 'classnames'

import './App.scss'

export default function App() {
	const [isShow, setIsShow] = useState(false);
	const [theme, setTheme] = useState('dark');
	const changeThene = (value='light') => { 
		console.log(value)
		setTheme(value)
	 }

	return (
		<div className={classNames(`box box-${theme}`, {
			foo: theme === "pink",
			baz: theme === "dark",
			bar: theme.length > 10 && isShow
		})} 
			onMouseUp={() => changeThene()}
			onMouseDown={() => changeThene('dark')}
		>
			<h2>Lorem ipsum dolor sit amet.</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis numquam quidem similique exercitationem reiciendis qui nobis pariatur! Officiis, assumenda impedit?</p>
			<button >light</button>
			<button onMouseLeave={() => changeThene('dark')}>dark</button>
			<button onMouseLeave={() => changeThene('pink')}>pink</button>
		</div>
	)
}
