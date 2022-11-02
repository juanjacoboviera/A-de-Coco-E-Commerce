import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart }  from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({setOpenModal}) => {
  return (
    <div className='product__card'>
        <div className="product__wishlist">
            <button className='fav__btn'><FontAwesomeIcon icon={faHeart}/></button>
        </div>
        <button className='quickView__btn' onClick={() => setOpenModal(true)}>VER DETALLE</button>
        <div className="product__img__mask">
            <div className="img__container"></div>
            <div className="img__container2"></div>
            <div className="product__info__container">
                <h2>ACEITE DE COCO VIRGEN</h2>
                <span>/380 ML</span>
                <p>$38.00</p>
                <button className='buy__btn'>AGREGAR</button>
            </div>

        </div>


    </div>
  )
}

export default ProductCard