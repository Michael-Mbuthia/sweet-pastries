import React, { createContext } from "react";
import all_product from "../Assets/Frontend_Assets/all_product";

const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const CartProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart());
  const contextValue = { all_product, cartItems, addToCart, removeFromCart };
  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
