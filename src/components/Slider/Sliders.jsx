import React from 'react'
import Slider from "react-slick";

import './Sliders.css'

export default function Sliders({ products }) {
	const settings = {
		dots: false,
		infinite: true,
		arrow: true,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		cssEase: "linear",
		pauseOnHover: true,

	}
	console.log(products)

	return (
		<div className='slider-wrapper'>

			{
				products.length > 0 && (
					<Slider {...settings}>
						{products.map(product => {
							return (
								<div className="slider-item main" key={product.id}>
									<div className="imageBox">
										<img src={product.images[0]} alt="" />
									</div>
									<div className="info">
										<span className="category">
											{product.category}
										</span>
										<h2>
											{product.title}
										</h2>
										<p>
											{product.description}
										</p>
										<ul>
											<li>
												{product.brand}
											</li>
											<li>
												{product.rating}
											</li>
											<li>
												{product.price}
											</li>
										</ul>
									</div>
								</div>
							)
						})}

					</Slider>
				)
			}
		</div>
	)
}
