import React from 'react'

const ProductBanner = ({children, bannerImg}) => {
  
  return (
    <div className='banner__container' style={{backgroundImage: `url(${bannerImg})`}}>
        <div className='title__container'>
           {children}
        </div>
    </div>
  )
}

export default ProductBanner