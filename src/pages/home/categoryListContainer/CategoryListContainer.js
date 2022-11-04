import React from 'react'
import CategoryItem from './CategoryItem'
import c3 from "../../../assets/C3.webp"
import {Link} from 'react-router-dom'

const CategoryListContainer = () => {
    const categoryObject = [
        {img: '/C1.webp', name:'Agua de coco', route: '/category/Aguas'},
        {img: '/C2.webp', name:'Bebida de coco', route: '/category/Bebidas'},
        {img: c3, name:'Aceites de coco', route: '/category/Aceites/'},
        {img: '/C4.webp', name:'Snacks' , route: '/category/Snacks'},
        {img: '/C5.webp', name:'Otros' , route: '/category/Organicos'},
        {img: '/C6.webp', name:'Packs' , route: '/category/Packs'}]

  return (
    <div className='categoryList__container'>
        {categoryObject.map((category, index) => <Link to={category.route}><CategoryItem key={index}  name={category.name} category={category.img}/></Link>)} 
    </div>
  )
}

export default CategoryListContainer