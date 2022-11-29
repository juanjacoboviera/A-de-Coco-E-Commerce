import React from 'react'

const ProductCounter = ({addToCount, decreaseToCount, counter}) => {
    
  return (
    <div className='counter__container'>
        <button onClick={() => decreaseToCount()} className='counter__btn__left'>-</button>
        <p>{counter}</p>
        <button onClick={() => addToCount()}   className='counter__btn__right'>+</button>
    </div>
  )
}

export default ProductCounter