import Nav from './components/Nav'
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import CategoryListContainer from "./pages/Aceites/CategoryListContainer";
import CartContent from './components/CartContent';
import cartContext, { CartContextProvider} from './storage/CartContext';
import { useState } from 'react';
import CartWidget from './components/CartWidget';
import { exportItemsToFirestore } from './services/firebase';

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route  path="/Category/:categoryId" element={<CategoryListContainer/>} />
          <Route  path="/Category/:categoryId/:producto" element={<CategoryListContainer/>}/>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
