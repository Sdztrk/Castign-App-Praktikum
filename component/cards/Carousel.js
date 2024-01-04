import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselImages } from '@/constants/Carousel';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SimpleCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const handlePrevClick = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + CarouselImages.length) % CarouselImages.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % CarouselImages.length);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Slider {...settings}>
        {CarouselImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '500px', marginTop: '85px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>

      <IconButton onClick={handlePrevClick} style={{ ...buttonStyle, left: 0 }} aria-label="previous">
        <ArrowBackIcon />
      </IconButton>

      <IconButton onClick={handleNextClick} style={{ ...buttonStyle, right: 0 }} aria-label="next">
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  transform: 'translateY(-50%)',
}

export default SimpleCarousel;
