import React from "react";
import all_product from "../Components/Assets/Frontend_Assets/all_product";
import ShopContext from "../Context/ShopContext";
import "./CSS/Products.css";

const Products = () => {
  return (
    <div className="products">
      <h1>Products</h1>
      <hr />
      <div className="products-card">
        {all_product.map((item, i) => {
          return (
            <ShopContext
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
