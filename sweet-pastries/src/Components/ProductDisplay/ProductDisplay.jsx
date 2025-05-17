import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import all_product from "../Assets/Frontend_Assets/all_product";
import "./ProductDisplay.css";
import placeholderImage from "../Assets/Frontend_Assets/placeholder.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const { id } = useParams();

  const { addToCart } = useContext(ShopContext);

  // Find the product in the all_product array that matches the given id
  const product = all_product.find((item) => item.id === parseInt(id));

  // If no product is found, display an error message
  if (!product) {
    return <p>Product not found</p>;
  }

  // Render the product details
  return (
    <div className="product-display">
      {/* Display the product image */}
      <div className="product-image-container">
        <img
          src={product.image || placeholderImage}
          alt={product.name}
          className="product-image"
        />
      </div>

      {/* Display the product details */}
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Ksh{product.price}</p>
        <button
          className="add-to-cart-button"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
