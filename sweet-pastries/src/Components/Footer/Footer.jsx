import React from "react";
import "./Footer.css";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import footer_logo from "../Assets/Frontend_Assets/logo_big.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Sweet Pastries by Mercy</p>
      </div>
      <div className="footer-links">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/+254721685694">
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© 2025 Sweet Pastries. All rights reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
