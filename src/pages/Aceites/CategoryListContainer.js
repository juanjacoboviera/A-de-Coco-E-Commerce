import React, {useState, useEffect, useContext} from 'react'
import ProductBanner from '../../components/ProductBanner'
import ProductCard from '../../components/ProductCard'
import CategoryTitle from '../../components/CategoryTitle'
import CategoryDescription from '../../components/CategoryDescription'
import ProductModal from '../../components/ProductModal'
import {useParams} from 'react-router-dom'
import {getCategories} from '../../functions/functions'
import { getProductsByCategory, getSingleProduct, getAllProducts} from '../../services/firebase'
import cartContext from '../../storage/CartContext'
import { Ring } from '@uiball/loaders'

const CategoryListContainer = () =>{

  const [products, setProducts] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState({});
  const [singleProduct, setSingleProduct] = useState({})
  const {categoryId, producto} = useParams();
  const [counter, setCounter] = useState(1)
  const context = useContext(cartContext)
  const {openCart, setOpenCart} = context.value


  const addToCount = () =>{
    setCounter((prevValue) => prevValue + 1)
  }

  const decreaseToCount = () =>{
    setCounter((prevValue) => prevValue - 1)
  }
  

  useEffect(() =>{
    console.log(singleProduct)
    console.log(!!Object.keys(singleProduct).length < 10)
    // Migrar esto a la BDs Firebase
    const category = getCategories(categoryId)
    const selectedCategory = {...category}
    setCategoryInfo(selectedCategory)
  
    if(categoryId === 'Todos'){
      getAllProducts().then((itemsDB) =>{
        setProducts(itemsDB)
      })
    }else(
      getProductsByCategory(categoryId).then((itemsDB) =>{
        setProducts(itemsDB)
      })
    )
    getSingleProduct(producto).then((itemsDB) =>{
      setSingleProduct(itemsDB)
    })

   if(producto === undefined){
    setCounter((prevValue) => prevValue - prevValue + 1)
    }
    console.log(counter)
  }, [categoryId, producto, counter])
  
  return (
    <>
      <header>
        <ProductModal open={!!producto} close={`/Category/${categoryId}`} singleProduct={singleProduct} addToCount={addToCount} decreaseToCount={decreaseToCount} counter={counter} setCounter={setCounter} setOpenCart={setOpenCart} openCart={openCart} />
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
            {products.length >=1 ? products.map(product => <ProductCard key={product.id} product={product} setOpenCart={setOpenCart} openCart={openCart}/>): 
            <Ring 
            size={50}
            lineWeight={5}
            speed={2} 
            color="green" 
            />}
          </div>

          </div>
        </main>
    </>
  )
}

export default CategoryListContainer



