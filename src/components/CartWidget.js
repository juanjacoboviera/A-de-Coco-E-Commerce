import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import CartContent from './CartContent';

const CartWidget = ({setOpenCart, openCart, cart, deleteFromCart, cartTotal, totalInCart}) => {

  return (
    <div className="cart__widget__container">
      {cart.length > 0 && <span className='cart__product__counter'>{cart.length}</span>}
      <a onClick={() => setOpenCart(!openCart)} className='icons' href="#"><FontAwesomeIcon icon={faCartShopping}/></a>
      <CartContent setOpenCart={setOpenCart} openCart={openCart} cart={cart} deleteFromCart={deleteFromCart} cartTotal={cartTotal}/>
    </div>
  )
}

export default CartWidget