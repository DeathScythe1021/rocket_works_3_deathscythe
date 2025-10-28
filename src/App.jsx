import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Btn.jsx";
import Card from "./components/Card.jsx";
import SmCard from "./components/SmCard.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ShippingPage from "./pages/ShippingPage.jsx";
import ShoppingPage from "./pages/ShoppingPage.jsx";
import FinishPage from "./pages/FinishPage.jsx";
import PayPage from "./pages/PayPage.jsx";
import InvoicePage from "./pages/InvoicePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import HomeCard from "./components/HomeCard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkoutbox from "./pages/Checkoutbox/index.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/checkout" element={<Checkoutbox />} />
        <Route path="/finish" element={<FinishPage />} />
       

        {/* <LoginPage /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
