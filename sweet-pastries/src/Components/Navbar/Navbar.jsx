import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import CartIcon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Sweet Pastries by Mercy</p>
      </div>
      <ul className="nav-menu ">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("products");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/products">
            Products
          </Link>
          {menu === "products" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/cart">
          {" "}
          <img src={CartIcon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
