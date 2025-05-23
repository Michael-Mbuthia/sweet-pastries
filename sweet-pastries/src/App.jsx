import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product-display/:id" element={<ProductDisplay />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
