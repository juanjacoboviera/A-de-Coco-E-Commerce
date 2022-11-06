import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart }  from "@fortawesome/free-solid-svg-icons";
import {useParams, Link} from 'react-router-dom'

const ProductCard = ({product}) => {
  const {categoryId} = useParams()
  return (
    <div className='product__card'>
        <div className="product__wishlist">
            <button className='fav__btn'><FontAwesomeIcon icon={faHeart}/></button>
        </div>
        <Link className='quickView__btn' to={`/Category/${categoryId}/${product.id}`} >VER DETALLE</Link>
        <div className="product__img__mask">
            <div className="img__container" style={{backgroundImage: `url(${product.images[1]})`}}></div>
            <div className="img__container2" style={{backgroundImage: `url(${product.images[0]})`}} ></div>
            <div className="product__info__container">
                <h2>{product.title}</h2>
                <span>/{product.size}</span>
                <p>${product.price}</p>
                <button className='buy__btn'>AGREGAR</button>
            </div>

        </div>


    </div>
  )
}

export default ProductCard