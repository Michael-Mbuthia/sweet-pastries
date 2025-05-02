import React from "react";
import { useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/Frontend_Assets/logo.png";
import CartIcon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="logo" />
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
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
