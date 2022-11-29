import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM  from 'react-dom';
import ProductCounter from './ProductCounter';
import cartContext from '../storage/CartContext';

const ProductModal = ({open, close, singleProduct, addToCount, decreaseToCount, setCounter, counter}) => {
    const {category, description, images, price, title, stock} = singleProduct

    const context = useContext(cartContext)
    const {addToCart, cart} = context.value
    
    const itemForCart = {
        ...singleProduct,
        quantity: counter
    }

    

    if(!open) return null;
  return ReactDOM.createPortal (
    <Link to={close} className='modal__overlay'>
        <div onClick={(e) =>{
            e.stopPropagation()
            e.preventDefault()
        }} className="modal__container">
            <div className="modal__left">
                <div className="thumbnails__container">
                <img className='thumbnail' src={images? images[0] : undefined } alt="" width='100px' height='110px' />
                    <img className='thumbnail' src={images? images[1] : undefined }  alt="" width='100px' height='110px' />
                    </div>
                    <img src={images? images[0] : undefined }   width='340px' height='350px' alt="" />
            </div>
            <div className="modal__right">
                <div className="content__container">
                <Link to={close}  className='closeModal__btn'>X</Link>
                <h2>{title}</h2>
                <span>${price}</span>
                <p>{description}</p>
                <ProductCounter addToCount={addToCount} decreaseToCount={decreaseToCount} counter={counter}/>
                <button  onClick={() => addToCart(itemForCart)} className='buy__btn'>AGREGAR AL CARRITO </button>
                </div>
            </div>
        </div>
    </Link>,
    document.getElementById('modal')
  )
}

export default ProductModal