import React from 'react';
import NavigationBar from './components/NavigationBar';
import Menupage from './components/Menupage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Home/>
      <Routes>
        <Route path="/Menu" element={<Menupage />} />
      </Routes>
    </Router>
  );

}

