import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar';
import Cart from './Cart'

const Nav = () => {
    const webSections = [
        {category: 'Bebidas'},
        {category: 'Aceites'},
        {category: 'Otros'},
        {category: 'Packs'},
        {category: 'Orgánicos'},
        {category: 'Todos'},
    ]
  return (
    <>
    <div className='nav__sectionOne'>
        <SearchBar/>
        <Logo/>
        <Cart/>
    </div>
    <ul className='nav__sectionTwo'>
        {webSections.map((section, index) => <li key={index}><a href="#">{section.category.toUpperCase()}</a></li>)}
    </ul>
    </> 
  )
}

export default Nav