import './App.css';
import { Home } from './components/Home';
import {Routes, Route} from 'react-router-dom'
import { Products } from './components/Products';
import { SingleProduct } from './components/SingleProduct';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      
    </div>
  );
}

export default App;
