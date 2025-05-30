import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="price">Ksh{props.new_price}</div>
        <div className="description">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
