import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselImages } from '@/constants/Carousel';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

const SimpleCarousel = () => {
  
  const sliderRef = useRef(null)

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box style={{ position: 'relative' }}>
      <Slider {...settings} ref={sliderRef}>
        {CarouselImages.map((image, index) => (
          <Box key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '500px', marginTop: '85px', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Slider>

      <IconButton onClick={handlePrevClick} style={{ ...buttonStyle, left: 0 }} aria-label="previous">
        <ArrowBackIcon />
      </IconButton>

      <IconButton onClick={handleNextClick} style={{ ...buttonStyle, right: 0 }} aria-label="next">
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

const buttonStyle = {
  position: 'absolute',
  top: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  transform: 'translateY(-50%)',
};

export default SimpleCarousel;
