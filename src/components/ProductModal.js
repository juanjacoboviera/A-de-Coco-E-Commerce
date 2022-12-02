import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ReactDOM  from 'react-dom';
import ProductCounter from './ProductCounter';
import cartContext from '../storage/CartContext';
import { Ring } from '@uiball/loaders'

const ProductModal = ({open, close, singleProduct, addToCount, decreaseToCount, setCounter, counter, setOpenCart, openCart}) => {
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
            {Object.keys(singleProduct).length === 0 ? <Ring 
            size={50}
            lineWeight={5}
            speed={2} 
            color="green" 
            /> : <>
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
                <Link to={close}><button  onClick={() => {
                    addToCart(itemForCart)
                    setOpenCart(!openCart)
                }} 
                className='buy__btn'>AGREGAR AL CARRITO </button></Link>
                </div>
            </div>
            </> }
            
            
            {/* <div className="modal__left">
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
                <Link to={close}><button  onClick={() => {
                    addToCart(itemForCart)
                    setOpenCart(!openCart)
                }} 
                className='buy__btn'>AGREGAR AL CARRITO </button></Link>
                </div>
            </div> */}
        </div>
    </Link>,
    document.getElementById('modal')
  )
}

export default ProductModal