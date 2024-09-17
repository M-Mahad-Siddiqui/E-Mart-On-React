
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import NavBar from './component/Navbar';
import Product from './component/Product';
import Products from './component/Products';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
