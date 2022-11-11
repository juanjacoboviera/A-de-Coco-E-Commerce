import React from 'react'
import ReactDOM  from 'react-dom';

const CartContent = ({setOpenCart, openCart}) => {
    const slideOpen = 'translateX(0)'
   
return ReactDOM.createPortal (
    <div style={{transform: openCart&& slideOpen  }} className='cart__container'>
        <button onClick={() => setOpenCart(!openCart)}>x</button>
    </div>,
    document.getElementById('cartContent')
  )
}

export default CartContent