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
import Checkout from './components/Checkout';
import { CartProvider } from './components/contexts/CartContext';
import SignIn from './components/SignIn';
import OrderTracking from './components/OrderTracking';
import Footer from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-wrapper">
          <NavigationBar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menupage />} />
              <Route path="/Contact Us" element={<Contactus />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/location" element={<LocationSelector />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/Sign In" element={<SignIn />} />
              <Route path="/order-tracking" element={<OrderTracking />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
