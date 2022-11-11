import Nav from './components/Nav'
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import CategoryListContainer from "./pages/Aceites/CategoryListContainer";
import CartContent from './components/CartContent';

function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route  path="/Category/:categoryId" element={<CategoryListContainer/> }/>
        <Route  path="/Category/:categoryId/:producto" element={<CategoryListContainer/> }/>
        <Route  path="/cart" element={<CartContent/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
