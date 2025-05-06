import React from "react";
import "./Popular.css";
import dataProduct from "../Assets/Frontend_Assets/data";
import Item from "../Items/Item";
const Popular = () => {
  return (
    <div className="popular">
      <h1>Cakes</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
