import React, { useState } from 'react'
// import MyPhoto from "../../assets/images/photo.jpg";

import "./App.css"

export default function App() {
	const [imageUrls, setImageUrls] = useState(['https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80', 'https://images.unsplash.com/photo-1668554245893-2430d0077217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80','https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'])
	return (
		<div className='App'>
			{/* <img src="https://images.unsplash.com/photo-1661956600654-edac218fea67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="developer" /> */}
			{/* <img src={imageUrl} alt="ssss" /> */}
			{/* <img src={MyPhoto} alt="ssss" /> */}
			{/* <img src='./public/photo.jpg' alt="ssss" /> */}
			{imageUrls.map((elem, index) => {
				return (
					<img key={index} src={elem} alt={`myPhoto-${++index}`} />
				)
			})}
		</div>
	)
}
