import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Button from "./components/Btn.jsx";
import Card from "./components/Card.jsx"
import SmCard from "./components/SmCard.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import LoginPage from './pages/LoginPage.jsx'
import ShippingPage from './pages/Shipping.jsx';
import FinishPage from './pages/FinishPage.jsx';
import ShoppingPage from './pages/ShoppingPage.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    
      <Navbar />
      <FinishPage />
      <Footer />
    
    </>
  )
}

export default App;
