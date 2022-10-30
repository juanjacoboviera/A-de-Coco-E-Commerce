import React from 'react'
import CategoryItem from './CategoryItem'
import c3 from "../../../assets/C3.webp"

const CategoryListContainer = () => {
    const categoryObject = [
        {img: '/C1.webp', name:'Agua de coco'},
        {img: '/C2.webp', name:'Bebida de coco'},
        {img: c3, name:'Aceites de coco'},
        {img: '/C4.webp', name:'Snacks'},
        {img: '/C5.webp', name:'Otros'},
        {img: '/C6.webp', name:'Packs'},]
  return (
    <div className='categoryList__container'>
        {categoryObject.map((category, index) => <CategoryItem key={index} name={category.name} category={category.img}/>)} 
    </div>
  )
}

export default CategoryListContainer