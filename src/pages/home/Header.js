import React from 'react'
import Carousel from '../home/carousel/Carousel'
import Nav from '../../components/Nav'
import ProductBanner from '../../components/ProductBanner'

const Header = () => {
  return (
    <header>
    <Nav/>
    <Carousel/>
    </header>
  )
}

export default Header