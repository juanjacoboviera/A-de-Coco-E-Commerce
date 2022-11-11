import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import CartContent from './CartContent';
import {Link} from 'react-router-dom'

const CartWidget = ({setOpenCart, openCart}) => {
  return (
    <>
    <Link to="/cart" onClick={() => setOpenCart(!openCart)} className='icons' href="#"><FontAwesomeIcon icon={faCartShopping}/></Link>
    <CartContent setOpenCart={setOpenCart} openCart={openCart}/>
    </>
  )
}

export default CartWidget