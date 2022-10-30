import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <a className='icons' href="#"><FontAwesomeIcon icon={faCartShopping}/></a>
  )
}

export default Cart