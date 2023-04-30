import React from "react";
import "./Navbar.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function Navbar() {
  function handleClick() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
  return (
    <div className="Navbar">
      <header>
        <nav className="navbar" id="home">
          <Link to="/">
            <h1 className="nav-branding">TeeTrendz</h1>
          </Link>

          <ul className="nav-menu">
            <Link>
              <li className="nav-item">Collection</li>
            </Link>
            <Link to="/aboutus">
              <li className="nav-item">About</li>
            </Link>

            <Link to="/cart">
              <AiOutlineShoppingCart className="icons-cart" />
            </Link>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
