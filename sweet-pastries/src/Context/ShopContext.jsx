import React from "react";
import "./ShopContext.css";
const ShopContext = (props) => {
  return (
    <div className="shop-context">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="price">Ksh{props.price}</div>
      </div>
      <div className="item-btn">
        <button className="shop-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ShopContext;
