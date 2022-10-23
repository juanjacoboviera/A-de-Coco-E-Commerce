import React from 'react'

const CarouselItem = ({slide}) => {
  return (
    <div className='carousel__item'>
        <img src={slide} width="1920px" />
    </div>
  )
}

export default CarouselItem