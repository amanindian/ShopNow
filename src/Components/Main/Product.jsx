import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
export default function Product({
  index,
  element,
  HendleAddToCart,
  ShowProduct,
}) {
  return (
    <div className="pro" key={index}>
      <Link to="/SingleProduct" onClick={ShowProduct}>
        <img className="ProClickImg" src={element.Image} alt="/" />
      </Link>
      <div className="des">
        <span>adidas</span>
        <h5 className="about">{element.Title}</h5>
        <div className="star">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <h4 className="proprise">{element.Amount}</h4>
      </div>
      <i className="fa-solid fa-cart-arrow-down" onClick={HendleAddToCart} />
      <div className="proDesc" style={{ display: "none" }}>
        {element.Description}
      </div>
    </div>
  );
}
