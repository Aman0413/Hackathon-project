import React from "react";
import Typewriter from "typewriter-effect";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
function Hero() {
  return (
    <div className="Hero ">
      <div className="container">
        <div className="headBanner">
          <div className="title-contant">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                  "Elevate Your Wardrobe with Our Trendy T-Shirts",
                  " Express Your Unique Style with Our Awesome T-Shirts",
                ],
              }}
            />
          </div>
          <div className="desc">
            <p></p>
          </div>
          <span className="btn">
            <button className="btn-primray">Explore More</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
