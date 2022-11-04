import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar';
import Cart from './Cart'
import {Link} from 'react-router-dom'

const Nav = () => {
    const webSections = [
      {category: 'Home', route: '/'},
      {category: 'Aguas', route: '/category/Aguas'},
        {category: 'Bebidas', route: '/category/Bebidas'},
        {category: 'Aceites', route: '/category/Aceites/'},
        {category: 'Snacks', route: '/category/Snacks'},
        {category: 'Packs', route: '/category/Packs'},
        {category: 'Orgánicos', route: '/category/Organicos'},
        {category: 'Todos', route: '/category/Todos'},
    ]
  return (
    <>
    <div className='nav__sectionOne'>
        <SearchBar/>
        <Logo/>
        <Cart/>
    </div>
    <ul className='nav__sectionTwo'>
          {webSections.map((section, index) => <li key={index}><Link to={section.route}>{section.category.toUpperCase()}</Link></li>)}
    </ul>
    </> 
  )
}

export default Nav