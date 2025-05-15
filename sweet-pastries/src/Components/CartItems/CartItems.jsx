import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartItems.css";
import CartContext from "../CartContext/CartContext";

const CartItems = () => {
  const navigate = useNavigate();
  const { all_product, cartItems, removeFromCart } = useContext(CartContext);

  const handleBackToShop = () => {
    navigate("/");
  };

  // Get all products that are in the cart
  const productsInCart = all_product.filter((product) => cartItems[product.id] > 0);

  return (
    <div className="cart-items">
      {productsInCart.length > 0 ? (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {productsInCart.map((product) => (
            <div className="cartitems-format" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.title || product.name}</p>
              <p>Ksh{product.price}</p>
              <button className="cartitems-quantity">
                {cartItems[product.id]}
              </button>
              <p>Ksh{(cartItems[product.id] * product.price).toFixed(2)}</p>
              <button onClick={() => removeFromCart(product.id)}>
                Remove
              </button>
            </div>
          ))}
        </>
      ) : (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={handleBackToShop}>Back to Shop</button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
