import React, { createContext, useState, useContext } from "react";
import "./ShopContext.css";

// Create the ShopContext
const ShopContext = createContext();

// ShopProvider component to wrap the app
export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If the item already exists, update its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  // Function to get all items in the cart
  const getCartItems = () => {
    return cart;
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartItems, clearCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the ShopContext
export const useShop = () => {
  return useContext(ShopContext);
};

// Move this component to a separate file (e.g., ProductCard.jsx)
const ShopContextComponent = (props) => {
  const { addToCart } = useShop(); // Use the addToCart function from context

  return (
    <div
      className="shop-context"
      onClick={props.onClick} // Links the product container to the product display page
      style={{ cursor: "pointer" }}
    >
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="price">Ksh{props.price}</div>
      </div>
      <div className="item-btn">
        {/* Prevent the button from triggering the onClick event of the parent */}
        <button
          className="shop-btn"
          onClick={(e) => {
            e.stopPropagation(); // Stops the click event from propagating to the parent
            addToCart({
              id: props.id,
              name: props.name,
              price: props.price,
              image: props.image,
            }); // Add the item to the cart
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopContextComponent;
