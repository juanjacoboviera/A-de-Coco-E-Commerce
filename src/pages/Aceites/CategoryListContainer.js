import React, {useState, useEffect} from 'react'
import ProductBanner from '../../components/ProductBanner'
import ProductCard from '../../components/ProductCard'
import CategoryTitle from '../../components/CategoryTitle'
import CategoryDescription from '../../components/CategoryDescription'
import ProductModal from '../../components/ProductModal'
import {useParams} from 'react-router-dom'
import {getCategories, getItemsByCategory, getSingleProduct} from '../../functions/functions'

const CategoryListContainer = () =>{

  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});
  const [singleProduct, setSingleProduct] = useState({})
  const {categoryId, producto} = useParams();
 
  useEffect(() =>{
    const category = getCategories(categoryId)
    const selectedCategory = {...category}
    setCategoryInfo(selectedCategory)
  
    const productsByCategory = getItemsByCategory(categoryId)
    const listOfProducts = [...productsByCategory]
    setProducts(listOfProducts)

    const getProduct = getSingleProduct(producto)
    const storedProduct = {...getProduct}
    setSingleProduct(storedProduct)

  }, [categoryId, producto])

  return (
    <>
      <header>
        <ProductModal open={!!producto} close={`/Category/${categoryId}`} singleProduct={singleProduct}  />
        <ProductBanner bannerImg={categoryInfo.bannerImg}> 
        <h2>{categoryInfo.bannerTitle}</h2>
        </ProductBanner>
      </header>
        <main className='main__container'>
        <div className="sectionDescription__container">
            <CategoryTitle>
              <h2>{categoryInfo.sectionTitle}</h2>
            </CategoryTitle>
            <CategoryDescription>
              <p>{categoryInfo.sectionDescription}</p>
            </CategoryDescription>
          </div>
          <div className="shop__container">
          <div className="filters__container">
          </div>
          <div className="card__container">
            {products.map(product => <ProductCard key={product.id} product={product}/>)}
          </div>

          </div>
        </main>
    </>
  )
}

export default CategoryListContainer