import React from "react";
import "./Footer.scss";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import ceditImg from "../../assets/creditcardicons.png";

function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <span class="logo_name">TeeTrendz</span>
            </div>
            <div class="media-icons">
              <a target="on_blank" href="#">
                <BsFacebook />
              </a>
              <a target="on_blank" href="#">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Links</li>
              <li>
                <a href="{% url 'home' %}">Home</a>
              </li>
              <li>
                <a href="{% url 'about' %}">About Us</a>
              </li>
              <li>
                <a href="{% url 'upload' %}">T-shirt</a>
              </li>
            </ul>

            <ul class="box">
              <li class="link_name">Legal Info</li>
              <li>
                <a href="{% url 'licence' %}">Licence</a>
              </li>
              <li>
                <a href="{% url 'terms' %}">Terms and Conditions</a>
              </li>
              <li>
                <a href="{% url 'privacy' %}">Privacy Policies</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Contact</li>
              <li>
                <a target="on_blank" href="tel:+917225090867">
                  +91 7225090867
                </a>
              </li>
              <li>
                <a target="on_blank" href="mailto:'amanv7404@gmail.com'">
                  amanv7404@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-img">
          <div className="card-container">
            <img src={ceditImg} alt="card-image" />
          </div>
        </div>

        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Copyright {new Date().getFullYear()} © <strong>T. By Aman</strong>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
