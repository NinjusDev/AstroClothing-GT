import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Cart from './components/cart/cart.js';
import Contact from './components/contact/contact.js';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Home from './components/home/home.js';
import Login from './components/login/login.js';
import Register from './components/login/register.js';
import Daytona from './components/products/prod/daytona.js';
import ProductCard from './components/products/products.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<ProductCard />} />
        <Route path='/products/daytona-500' element={<Daytona />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
