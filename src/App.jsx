import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // adjust the path if needed

import Menupage from "./components/Menupage";
import Contactus from "./components/Contactus";
import Cart from "./components/Cart";
import NavigationBar from "./components/NavigationBar";
import { CartProvider } from "./components/CartContext";
import OffersPage from "./components/OffersPage";
import SignIn from "./components/SignIn";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" component={OffersPage} />
          <Route path="/menu" element={<Menupage />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;






