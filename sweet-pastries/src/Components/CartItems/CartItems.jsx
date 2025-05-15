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
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((product) => {
        if (cartItems[(product, id)] > 0) {
          return (
            <div className="cartitems-format" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price}</p>
              <buttton className="cartitems-quantity">
                {cartItems[product.id]}
              </buttton>
              <p>Ksh{(cartItems[product.id] * product.price).toFixed(2)}</p>
              <button onClick={() => handleRemoveFromCart(product.id)}>
                Remove
              </button>
            </div>
          );
        }
      })}
      ))) : (
      <div>
        <p>Your cart is empty.</p>
        <button onClick={handleBackToShop}>Back to Shop</button>
      </div>
      )
    </div>
  );
};

export default CartItems;
