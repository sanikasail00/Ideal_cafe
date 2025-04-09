import React from 'react';
import NavigationBar from './components/NavigationBar';
import Menupage from './components/Menupage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/Menu" element={<Menupage />} />
      </Routes>
    </Router>
  );
}

