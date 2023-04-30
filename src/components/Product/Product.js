import React from "react";
import "./Product.scss";
import demo from "../../assets/pngegg (1).png";

function Product() {
  return (
    <div className="Product center">
      <div className="container">
        <div className="left-part">
          <div className="product-img">
            <img src={demo} alt="product" />
          </div>
        </div>
        <div className="right-part">
          <h3>T-shirt</h3>
          <h3>$ 34</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            alias consectetur similique amet culpa eligendi dolores corrupti
            repudiandae enim quis. Rem quidem harum eligendi aliquam, vero
            voluptas tenetur unde ea?
          </p>
          <div className="customize">
            <div className="size-container">
              <label htmlFor="size">Size</label>
              <select name="" id="size" className="select-size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="color-container">
              <label htmlFor="Color">Color</label>
              <select name="" id="Color" className="select-color">
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
              </select>
            </div>
          </div>
          <div className="quantity">
            <button className="increment box center hover">+</button>
            <div className="box center">0</div>
            <button className="decrement box center hover">-</button>
          </div>

          <div className="btn-cart">Add to Cart</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
