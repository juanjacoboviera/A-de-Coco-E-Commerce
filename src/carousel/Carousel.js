import React from 'react'
import { useState, useEffect } from 'react'
import CarouselItem from './CarouselItem'
import CarouselControls from './CarouselControls'

const Carousel = () => {
    const [currenSlide, setCurrentSlide] = useState(0)
    
    const slides = [
        "/banner1.jpg",
        "/banner2.jpg"
    ]

    const prev = () => {
        const index = currenSlide > 0 ? currenSlide - 1 : slides.length - 1
        setCurrentSlide(index)
    }

    const next = () => {
        const index = currenSlide < slides.length - 1 ? currenSlide + 1 : 0 
        setCurrentSlide(index)
    }

    useEffect(() =>{
        const slideInterval = setInterval(()=>{
            setCurrentSlide(currenSlide => currenSlide < slides.length - 1 ? currenSlide + 1 : 0)
        }, 3000)

        return() => clearInterval(slideInterval)
    }, [])
    
    
  return (
    <div className='carousel'>
        <div className="carousel__inner" style={{ transform: `translateX(${-currenSlide * 100}%)`}}>
            {slides.map((slide, index) =>  <CarouselItem slide={slide} key={index}/>)}
        </div>
        <CarouselControls prev={prev} next={next}/>
    </div>
  )
}

export default Carousel