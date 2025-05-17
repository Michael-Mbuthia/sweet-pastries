import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/Products.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product-display/${id}`);
  };

  return (
    <div className="products">
      <h1>Products</h1>
      <hr />
      <div className="products-card">
        {all_product.map((item) => (
          <div
            key={item.id}
            className="product-card"
            onClick={() => handleProductClick(item.id)}
          >
            <img src={item.image} alt="" />
            <h2>{item.name}</h2>
            <div className="product-prices">
              <div className="price">Ksh{item.price}</div>
              <div className="description">{item.old_price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
