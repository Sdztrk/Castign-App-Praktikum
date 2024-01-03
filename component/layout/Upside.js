import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const images = [
  'İmages/m-1.jpg',
  'İmages/m-2.jpg',
  'İmages/m-3.jpg',
  '/ferrari.png',
]

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
          
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '500px', marginTop: '85px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleCarousel
