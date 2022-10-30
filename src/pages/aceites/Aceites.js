import React from 'react'
import ProductBanner from '../../components/ProductBanner'
import Nav from '../../components/Nav'
import cocoImg from '../../assets/banner_aceites.webp'
import ProductCard from '../../components/ProductCard'

const Aceites = () => {
  const categoryName = `ACEITES <br/> A DE COCO`
  return (
    <>
      <header>
        <Nav/>
        <ProductBanner bannerImg={cocoImg}> 
        <h2>ACEITES <br/> A DE COCO</h2>
        </ProductBanner>
      </header>
        <main className='main__container'>
          <div className="filters__container">
          </div>
          <div className="card__container">
            <ProductCard/>
            <ProductCard/>

          </div>
        </main>
    </>
  )
}

export default Aceites