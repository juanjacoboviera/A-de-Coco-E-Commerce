import React from 'react'

const ProductCounter = () => {
  return (
    <div className='counter__container'>
        <button className='counter__btn__left'>-</button>
        <p>0</p>
        <button className='counter__btn__right'>+</button>
    </div>
  )
}

export default ProductCounter