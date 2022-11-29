import React, {useContext} from 'react'
import ReactDOM  from 'react-dom';
import cartContext from '../storage/CartContext';
import CartProductDetail from './CartProductDetail';

const CartContent = ({setOpenCart, openCart, cart, deleteFromCart, cartTotal}) => {
    const slideOpen = 'translateX(0)'
return ReactDOM.createPortal (
    <div style={{transform: openCart&& slideOpen  }} className='cart__container'>
        <h2>CARRITO DE COMPRAS</h2>
        <button className='cart__closeBtn' onClick={() => setOpenCart(!openCart)}>x</button>
        <div className="cart__list__container">
            {cart.map(product => <CartProductDetail key={product.id} product={product} deleteFromCart={deleteFromCart}/>)}
        </div>
        <p>Total: ${cartTotal}</p>
        <button className='cart__checkout__btn'>FINALIZAR PEDIDO</button>
    </div>,
    document.getElementById('cartContent')
  )
}

export default CartContent