import React, { useState } from "react";
import CartItems from "../Components/CartItems/CartItems";
import Products from "./Products";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h1>Sweet Pastries</h1>
      <CartItems items={cartItems} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Cart;
