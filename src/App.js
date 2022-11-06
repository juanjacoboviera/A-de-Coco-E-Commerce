import Header from "./pages/home/Header";
import Main from "./pages/home/Main";
import Nav from './components/Nav'
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import CategoryListContainer from "./pages/Aceites/CategoryListContainer";
import ProductModal from "./components/ProductModal";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route  path="/Category/:categoryId" element={<CategoryListContainer/> }/>
        <Route  path="/Category/:categoryId/:producto" element={<CategoryListContainer/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
