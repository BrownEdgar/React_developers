import React from 'react'
import Slider from "react-slick";
import "./FullSlider.scss"

export default function FullSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 4, // նախնական 'slide' index-ը

  }
  return (
    <Slider {...settings} className='Full-Slider'>
      <div className='slick-wrapper'>
        <img src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />
      </div>
      <div className='slick-wrapper'>
        <img src="https://images.unsplash.com/photo-1680794060754-a55714ded55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      </div>
      <div className='slick-wrapper'>
        <img src="https://images.unsplash.com/photo-1617447871614-ffddc87dd75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" />
      </div>
      <div className='slick-wrapper'>
        <img src="https://images.unsplash.com/photo-1475809913362-28a064062ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      </div>
      <div className='slick-wrapper'>
        <img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="" />
      </div>
      <div className='slick-wrapper'>
        <img src="https://plus.unsplash.com/premium_photo-1675756583552-17bf4393c0c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      </div>
    </Slider>
  )
}
