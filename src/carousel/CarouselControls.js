import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight }  from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft }  from "@fortawesome/free-solid-svg-icons";

const CarouselControls = ({prev, next}) => {
  return (
    <div>
        <button className='carousel__control left' onClick={prev}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <button className='carousel__control right' onClick={next}><FontAwesomeIcon icon={faChevronRight}/></button>
    </div>
  )
}

export default CarouselControls