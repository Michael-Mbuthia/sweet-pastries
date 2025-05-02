import React from "react";
import "./Hero.css";
import HeroImage from "../Assets/images/image53.jpg";
import ArrowIcon from "../Assets/Frontend_Assets/arrow.png";
import HandIcon from "../Assets/Frontend_Assets/hand_icon.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Sweet pastries</h2>
        <div>
          <div className="icon">
            <p>New</p>
            <img src={HandIcon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone </p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest cakes</div>
          <img src={ArrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
