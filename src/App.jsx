// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Menupage from './components/Menupage';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Offers from './components/Offers';
import LocationSelector from './components/LocationSelector';
import CartPage from './components/CartPage';
import Checkout from './components/Checkout';  // Import Checkout component
import { CartProvider } from './components/contexts/CartContext';

import SignIn from './components/SignIn';


export default function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/Contact Us" element={<Contactus />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/location" element={<LocationSelector />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/Sign In" element={<SignIn />} />

        </Routes>
      </Router>
    </CartProvider>
  );
}
