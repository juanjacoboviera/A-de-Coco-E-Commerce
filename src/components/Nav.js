import React, {useState, useEffect} from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';


const Nav = () => {
  const [openCart, setOpenCart] = useState(false)

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
        <CartWidget setOpenCart={setOpenCart} openCart={openCart}/>
    </div>
    <ul className='nav__sectionTwo'>
          {webSections.map((section, index) => <li key={index}><Link to={section.route}>{section.category.toUpperCase()}</Link></li>)}
    </ul>
    </> 
  )
}

export default Nav