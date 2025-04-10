import React from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <NavigationBar/>
      <Home/>
    </div>
  )
}

