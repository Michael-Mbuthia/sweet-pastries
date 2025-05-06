import React from "react";
import "./Footer.css";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
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
