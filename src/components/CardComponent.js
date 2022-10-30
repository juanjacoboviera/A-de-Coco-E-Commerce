import React from 'react'

const CardComponent = ({name, img}) => {
  return (
    <div className="recipe__card">
        <img src={img} alt="" />
        <h4 className='recipe__title'>{name}</h4>
    </div>
  
  )
}

export default CardComponent