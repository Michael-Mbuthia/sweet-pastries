import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartItems.css";

const CartItems = ({ items }) => {
  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate("/");
  };

  return (
    <div className="cart-items">
      <h2>Cart</h2>
      <ul>
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: "50px" }} />
              <span>{item.name}</span> - <span>Ksh{item.price}</span>
            </li>
          ))
        ) : (
          <div>
            <p>Your cart is empty.</p>
            <button onClick={handleBackToShop}>Back to Shop</button>
          </div>
        )}
      </ul>
    </div>
  );
};

export default CartItems;
