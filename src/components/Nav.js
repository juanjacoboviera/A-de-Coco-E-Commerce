import React, {useState, useEffect, useContext} from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'
import CartWidget from './CartWidget';
import cartContext from '../storage/CartContext';

const Nav = () => {
  // const [openCart, setOpenCart] = useState(false)
  const context = useContext(cartContext)
  const {cart, deleteFromCart, cartTotal, totalInCart, clearCart, openCart, setOpenCart} = context.value

  useEffect(() =>{
    totalInCart()
  }, [cart])

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
        <CartWidget setOpenCart={setOpenCart} openCart={openCart} cart={cart} deleteFromCart={deleteFromCart} cartTotal={cartTotal} clearCart={clearCart}/>
    </div>
    <ul className='nav__sectionTwo'>
          {webSections.map((section, index) => <li key={index}><Link to={section.route}>{section.category.toUpperCase()}</Link></li>)}
    </ul>
    </> 
  )
}

export default Nav