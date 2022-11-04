import React, {useState, useEffect} from 'react'
import ProductBanner from '../../components/ProductBanner'
import Nav from '../../components/Nav'
import ProductCard from '../../components/ProductCard'
import CategoryTitle from '../../components/CategoryTitle'
import CategoryDescription from '../../components/CategoryDescription'
import ProductModal from '../../components/ProductModal'
import {useParams} from 'react-router-dom'
import { getItemsByCategory } from '../../functions/functions'
import { getCategories } from '../../functions/functions'


const CategoryListContainer = () =>{

  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const {categoryId} = useParams();
 
  useEffect(() =>{
    const category = getCategories(categoryId)
    const selectedCategory = {...category}
    setCategoryInfo(selectedCategory)
  
    const productsByCategory = getItemsByCategory(categoryId)
    const listOfProducts = [...productsByCategory]
    setProducts(listOfProducts)

  }, [categoryId])

  
  return (
    <>
      <header>
        <ProductModal open={openModal} setOpenModal={setOpenModal} />
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
            {products.map(product => <ProductCard key={product.id} product={product} setOpenModal={setOpenModal}/>)}
          </div>

          </div>
        </main>
    </>
  )
}

export default CategoryListContainer