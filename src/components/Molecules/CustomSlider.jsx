import React, { useState } from 'react';
import './CustomSlider.css';

const images = [
  '/path/to/your/image1.jpg',  // Replace these with your actual image paths
  '/path/to/your/image2.jpg',
  '/path/to/your/image3.jpg'
];

const CustomSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className='slider'>
      <div className='left-arrow' onClick={prevSlide}>&lt;</div>
      <div className='right-arrow' onClick={nextSlide}>&gt;</div>
      {images.map((image, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (<img src={image} alt='Slide' className='image' />)}
        </div>
      ))}
      <div className='dots'>
        {images.map((_, idx) => (
          <span key={idx} className={idx === current ? 'dot active' : 'dot'} onClick={() => setCurrent(idx)}></span>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;