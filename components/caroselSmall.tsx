// components/Carousel.js
"use client"
import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false
  };

  return (
    <Slider {...settings}>

      <div className='bg-yellow-500 flex justify-center flex-col px-2 h-1/2 mt-4 rounded-lg overflow-hidden'>
        <h2 className=' flex justify-center py-2  font-bold text-4xl text-white'>Slide 1</h2>
        <p className='py-4 font-bold text-xs text-center text-white'>This is a short paragraph for slide 1. Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='bg-yellow-500 flex justify-center flex-col px-2 h-1/2 mt-4 rounded-lg overflow-hidden '>
        <h2 className=' flex justify-center py-2  font-bold text-4xl text-white'>Slide 1</h2>
        <p className='py-4 font-bold text-xs text-center text-white'>This is a short paragraph for slide 1. Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='bg-yellow-500 flex justify-center flex-col px-2 h-1/2 mt-4 rounded-lg overflow-hidden '>
        <h2 className=' flex justify-center py-2  font-bold text-4xl text-white'>Slide 1</h2>
        <p className='py-4 font-bold text-xs text-center text-white'>This is a short paragraph for slide 1. Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='bg-yellow-500 flex justify-center flex-col px-2 h-1/2 mt-4 rounded-lg overflow-hidden'>
        <h2 className=' flex justify-center py-2  font-bold text-4xl text-white'>Slide 1</h2>
        <p className='py-4 font-bold text-xs text-center text-white'>This is a short paragraph for slide 1. Lorem ipsum dolor sit amet.</p>
      </div>
    
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
