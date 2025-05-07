import React from "react";
import { ShopProvider } from "./Context/ShopContext";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import CartComponent from "./Components/CartComponent/CartComponent"; // Example component
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <ShopProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product-display/:id" element={<ProductDisplay />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <h1>Sweet Pastries</h1>
        <ProductCard
          id={1}
          name="Chocolate Cake"
          price={500}
          image="/images/chocolate-cake.jpg"
          onClick={() => console.log("Navigate to product details")}
        />
        <CartComponent />
      </div>
      <Footer />
    </ShopProvider>
  );
}

export default App;
