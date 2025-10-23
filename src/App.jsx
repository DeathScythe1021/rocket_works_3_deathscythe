import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Button from "./components/Btn.jsx";
import Card from "./components/Card.jsx"
import ProductPage from "./pages/ProductPage.jsx"
function App() {

  return (
    <>
    <Navbar></Navbar>
    <ProductPage/>
    <Footer></Footer>
   
    
      
    </>
  )
}

export default App;
