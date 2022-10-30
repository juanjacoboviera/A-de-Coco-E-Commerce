import React from 'react'
import ProductBanner from '../../components/ProductBanner'
import Nav from '../../components/Nav'
import cocoImg from '../../assets/banner_aceites.webp'
import ProductCard from '../../components/ProductCard'
import CategoryTitle from '../../components/CategoryTitle'
import CategoryDescription from '../../components/CategoryDescription'

const Aceites = () => {
  
  return (
    <>
      <header>
        <Nav/>
        <ProductBanner bannerImg={cocoImg}> 
        <h2>ACEITES <br/> A DE COCO</h2>
        </ProductBanner>
      </header>
        <main className='main__container'>
        <div className="sectionDescription__container">
            <CategoryTitle>
              <h2>¡2 OPCIONES DE ACEITE DE COCO PRENSADOS EN FRÍO PARA TODOS LOS GUSTOS!</h2>
            </CategoryTitle>
            <CategoryDescription>
              <p>Nuestros Aceites de Coco A de Coco son obtenidos mediante prensado en frío, lo cual <br/> conserva intactas sus propiedades. Los puedes usar para freír, hornear, saltear, ¡y hasta <br/> para tips de belleza!</p>
            </CategoryDescription>
          </div>
          <div className="shop__container">
          <div className="filters__container">
          </div>
          <div className="card__container">
            <ProductCard/>
            <ProductCard/>
          </div>

          </div>
        </main>
    </>
  )
}

export default Aceites