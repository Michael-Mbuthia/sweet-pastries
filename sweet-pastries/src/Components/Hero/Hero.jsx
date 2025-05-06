import React from "react";
import "./Hero.css";
import HeroImage from "../Assets/Frontend_Assets/images/image53.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Sweet pastries</h2>
        <div>
          <p>Fresh</p>
          <p>Pastries</p>
          <p>for everyone </p>
        </div>
        <div className="hero-latest-btn">
          <div>
            {" "}
            <Link to="/products">Order now</Link>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
