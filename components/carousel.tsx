"use client";
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import image1 from "../app/assets/carouselitems/shoe1.jpeg"
import image5 from "../app/assets/carouselitems/trouser1.jpeg"
import image6 from "../app/assets/carouselitems/shoe6.jpg"
import image7 from "../app/assets/carouselitems/shoe7.jpg"
import Image from "next/image"

// Sample images for the carousel
const images = [
  { url: image1, statement: 'Statement 1',content:'Shoes Fashion' , highlight:"Come and Grab it", main:"brand new shoes", shop:"Get It"},
  // { url: image5, statement: 'Statement 2' },
  { url: image6, statement: 'Statement 3' ,content:"Best Sneakers", highlight:"Make a move and buy it", main:"we make it happen",shop:"Grab Now"},
  { url: image7, statement: 'Statement 3', content:"Sports Shoes" , highlight:"Home for your shoes", main: "live the life", shop:"Shop Now"},

];

const CarouselContainer = styled.div`
  .slick-slider {
    width: 100%;
    height:15%;
    
    margin: 0 auto;
    border-radius:20px;

  }
  .slick-list{
    max-height:80%;
  }

  .slick-slide {
    position: relative;
    border-radius:20px;
  }

  .slick-slide img {
    // width: 1%;
    height: 80%;
  }

  .carousel-statement {
    position: absolute;
    top:4em;
    height:80%;
    width:50%;
    left: 20px;
    padding-top:2em;
    color: #ffffff;
    background: radial-gradient(circle, rgba(192, 192, 192, 1), rgba(192, 192, 192, 0));
    padding: 2em 3em;
    border-radius: 20%;
    font-size: 14px;
  }
  .content{
    background-color: #0a021c;
    color:#fff;
    border-radius:4px;
    font-weight: semi-bold;
    width:fit-content;
    padding:4px 8px;
  }
  .heading1{
    font-size:18px;
    opacity:0.7;
    color:#0a021c;

  }
  .heading2{
    color:#0a021c;
    font-weight:bold;
    text-transform:uppercase;
  }
  .shop{
    color:#fff;
    border-radius:20px;
    background-color:#ff6b6b;
    width:fit-content;
    padding:4px 12px;
    font-weight:bold;
  }

`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows:false
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.url} alt={`Image ${index + 1}`}  width={600} height={800}/>
            <div className="carousel-statement">
              
              <div className="flex flex-col gap-3">
                <button className='content'>{image.content}</button>
                <h3 className='heading1'>{image.highlight}</h3>
                <h2 className='heading2'>{image.main}</h2>
                <button className='shop'>{image.shop}</button>
              </div>
              </div>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
