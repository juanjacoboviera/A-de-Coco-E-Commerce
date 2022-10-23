import React from 'react'

const CarouselItem = ({slide}) => {
  return (
    <div className='carousel__item'>
        <img src={slide} width="100%" />
    </div>
  )
}

export default CarouselItem