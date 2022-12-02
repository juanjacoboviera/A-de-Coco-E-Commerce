import React from 'react'
import ReactDOM  from 'react-dom';
import { createBuyOrderFireStore } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import CartProductDetail from './CartProductDetail';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CartContent = ({setOpenCart, openCart, cart, deleteFromCart, cartTotal, clearCart}) => {
    const navigate = useNavigate();
    const slideOpen = 'translateX(0)'
    const createBuyOrder = () =>{
        const orderInfo = {
                clientInfo: {
                    name: "juan",
                    lastname: "viera",
                    email: "juanajacoboviera@hotmail.com",
                },
                cart: cart,
                date: new Date(),
                total: cartTotal
        }
        createBuyOrderFireStore(orderInfo).then (orderId => {
            console.log(orderId)
            const MySwal = withReactContent(Swal)
            MySwal.fire({
                title: `<p>Compra exitosa! Su número de orden es: ${orderId}</p>`,
               
              })
              setOpenCart(!openCart)
              clearCart()
              navigate("/")
        })
    }

return ReactDOM.createPortal (
    <div style={{transform: openCart&& slideOpen  }} className='cart__container'>
        <h2>CARRITO DE COMPRAS</h2>
        <button className='cart__closeBtn' onClick={() => setOpenCart(!openCart)}>x</button>
        <div className="cart__list__container">
            {cart.length <= 0? <p>El carrito está vacio</p> 
            : cart.map(product => <CartProductDetail key={product.id} product={product} deleteFromCart={deleteFromCart}/>)}
        </div>
        <p>Total: ${cartTotal}</p>
        <button onClick={createBuyOrder} className='cart__checkout__btn'>FINALIZAR PEDIDO</button>
    </div>,
    document.getElementById('cartContent')
  )
}

export default CartContent