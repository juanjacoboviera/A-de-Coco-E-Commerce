import React from 'react'
import { useState } from 'react';

const CategoryItem = ({name, category}) => {
  return (
    <div className="category__item__container">
        <img  src={category}></img>
        <h3 className='category__title'>{name}</h3>
        <button className='category__button'>+</button>
    </div>
  )
}

export default CategoryItem