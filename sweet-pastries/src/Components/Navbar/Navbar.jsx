import React from "react";
import { useState } from "react";
import "./Navbar.css";
import CartIcon from "../Assets/Frontend_Assets/cart_icon.png";
const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src />
        <p>Sweet Pastries by Mercy</p>
      </div>
      <ul className="nav-menu ">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("cakes");
          }}
        >
          Cakes{menu === "cakes" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={CartIcon} alt="cart" className="nav-cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
