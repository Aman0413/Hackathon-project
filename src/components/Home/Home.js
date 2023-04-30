import React, { useEffect } from "react";
import "./Home.scss";
import ProductCard from "../ProductCard/ProductCard";
import Hero from "../Hero-Section/Hero";
import img1 from "../../assets/pngegg (1).png";
import img2 from "../../assets/pngegg (4).png";
import img3 from "../../assets/pngegg (6).png";
import img4 from "../../assets/pngegg (8).png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <div
        className="Home"
        onClick={() => {
          navigate("/product");
        }}
      >
        <div className="container">
          <div className="heading">
            <h3>Our Picks</h3>
          </div>
          <div className="products">
            <ProductCard img={img1} title={"T-shirt"} price={29} />
            <ProductCard img={img2} title={"T-shirt"} price={29} />
            <ProductCard img={img3} title={"T-shirt"} price={29} />
            <ProductCard img={img4} title={"T-shirt"} price={29} />
            <ProductCard img={img2} title={"T-shirt"} price={29} />
            <ProductCard img={img1} title={"T-shirt"} price={29} />
            <ProductCard img={img4} title={"T-shirt"} price={29} />
            <ProductCard img={img3} title={"T-shirt"} price={29} />
          </div>
          <div className="heading">
            <h3>Our Products</h3>
          </div>
          <div className="products">
            <ProductCard img={img1} title={"T-shirt"} price={29} />
            <ProductCard img={img2} title={"T-shirt"} price={29} />
            <ProductCard img={img3} title={"T-shirt"} price={29} />
            <ProductCard img={img4} title={"T-shirt"} price={29} />
            <ProductCard img={img2} title={"T-shirt"} price={29} />
            <ProductCard img={img1} title={"T-shirt"} price={29} />
            <ProductCard img={img4} title={"T-shirt"} price={29} />
            <ProductCard img={img3} title={"T-shirt"} price={29} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
