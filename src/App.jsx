import React from 'react';
import NavigationBar from './components/NavigationBar';
import Menupage from './components/Menupage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Contactus from './components/Contactus';
import Offers from './components/Offers';
import LocationSelector from './components/LocationSelector';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menupage />} />
        <Route path="/Contact Us" element={<Contactus/>}/>
        <Route path="Offers" element={<Offers/>}/>
        <Route path="/location" element={<LocationSelector />} />
      </Routes>
    </Router>
  );

}

