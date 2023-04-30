import React from "react";
import "./ProductCard.scss";

function ProductCard({ img, title, price }) {
  return (
    <div className="ProductCard ">
      <div class="card">
        <div className="img">
          <img src={img} />
        </div>

        <div className="price">
          <h3>{title}</h3>
          <h3>${price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
