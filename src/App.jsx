import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncProducts } from './store/features/productsSlice';
import Sliders from './components/Slider/Sliders';

export default function App() {
	const products = useSelector(state => state.products.data);
	const status = useSelector(state => state.products.result);
	const dispatch = useDispatch();

	const addProducts = () => { 
		dispatch(getAsyncProducts('https://dummyjson.com/products'))
	}

	useEffect(() => {
		addProducts()
	}, [])

	console.log(products)
	return (
		<div>
			<Sliders products={products}/>
	
		</div>
	)
}
