import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Product({
  index,
  element,
  HendleAddToCart,
  ShowProduct,
}) {
  const { Image, Title, Amount, Description } = element;

  return (
    <div className="pro" key={index}>
      <Link to="/SingleProduct" onClick={ShowProduct}>
        <img className="ProClickImg" src={Image} alt="/" />
      </Link>
      <div className="des">
        <span>adidas</span>
        <h5 className="about">{Title}</h5>
        <div className="star">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} />
          ))}
        </div>
        <h4 className="proprise">{Amount}</h4>
      </div>
      <i className="fa-solid fa-cart-arrow-down" onClick={HendleAddToCart} />
      <div className="proDesc" style={{ display: "none" }}>
        {Description}
      </div>
    </div>
  );
}
