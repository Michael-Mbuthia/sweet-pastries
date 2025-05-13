import React from "react";
import "./ShopContext.css";

const ShopContext = (props) => {
  const handleAddToCart = (id) => {
    // Function to handle adding item to cart

    console.log(`Item with id ${id} added to cart`);
  };
  return (
    <div
      className="shop-context"
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    >
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="price">Ksh{props.price}</div>
      </div>
      <div className="item-btn">
        <button
          className="shop-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(props.id); // Call the function to add item to cart
            ({
              id: props.id,
              name: props.name,
              price: props.price,
              image: props.image,
            }); // Add item to cart
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopContext;
