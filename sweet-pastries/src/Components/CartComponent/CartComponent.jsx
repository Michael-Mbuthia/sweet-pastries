import React from "react";
import { useShop } from "../../Context/ShopContext";

const CartComponent = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useShop();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - Quantity: {item.quantity}
            </p>
            <button onClick={() => addToCart(item)}>Add More</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
    </div>
  );
};

export default CartComponent;
