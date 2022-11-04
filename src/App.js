import Header from "./pages/home/Header";
import Main from "./pages/home/Main";
import Nav from './components/Nav'
import Home from "./pages/home/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryListContainer from "./pages/Aceites/CategoryListContainer";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route  path="/Category/:categoryId" element={<CategoryListContainer/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
