import React, { useState } from 'react'
import data from './data.json'
import './App.scss'

export default function App() {
	const [products, setProducts] = useState(data);
	console.log(products)
	return (
		<div className='App'>
			<div className='App-Product'>
				<div 
				className='App-Image' 
				style={{ backgroundImage: `url(${products[0].image})`}}></div>
				<div className='App-Info'>
					<h2>{products[0].title}</h2>
					<p>{products[0].description}</p>
				</div>
				<div className='App-Last'>
					<p>${products[0].price.toFixed(2)}</p>
					<button>buy now</button>
				</div>
			</div>
		</div>
	)
}
