import React from 'react'
import CarouselItem from './CarouselItem'

const Carousel = () => {
    const slides = [
        "/Banner_NuevasBebidas_desktop_v2_3024x.webp",
        "/packs_c202e423-6577-4d53-9ebe-69735c0a878f_3024x.webp"
    ]
    console.log(slides)
  return (
    <div className='carousel'>
        <div className="carousel__inner">
            {slides.map((slide, index) =>  <CarouselItem slide={slide} key={index}/>)}
        </div>
    </div>
  )
}

export default Carousel