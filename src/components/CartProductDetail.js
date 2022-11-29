import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash }  from "@fortawesome/free-solid-svg-icons";

const CartProductDetail = ({product, deleteFromCart}) => {
    const {title, quantity, images, price, id} = product 
  return (
    <div className="cart__product__container">
    <div className="cart__img__container">
        <img src={images[0]} width="120px" alt="" />
    </div>
    <div className="cart__product__detail">
        <h3>{title}</h3>
        <div className="cart__product__priceQuantity">
        <p>${price}</p>
        <p>{quantity} unidades</p>
        </div>
        <button onClick={() => deleteFromCart(id)}><FontAwesomeIcon icon={faTrash}/></button>
    </div>
</div>
  )
}

export default CartProductDetail