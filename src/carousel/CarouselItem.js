import React from 'react'

const CarouselItem = ({slide, stopSlide, startSlide}) => {
  return (
    <div className='carousel__item' onMouseEnter={stopSlide} onMouseOut={startSlide}>
        <img src={slide} width="100%" />
    </div>
  )
}

export default CarouselItem