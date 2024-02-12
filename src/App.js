
import './App.css';
import { BrowserRouter, Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path ='/cart' element={<Cart/>}/>
      <Route path ='/checkout' element={<Checkout/>}/>
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
