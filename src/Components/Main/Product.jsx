import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useAddToCart from "../../CustomHooks/useAddToCart";

export default function Product({ id, element }) {
  const { Image, Title, Amount, Description } = element;

  const [HendleAddToCart, ShowProduct] = useAddToCart();

  return (
    <div className="pro" key={id}>
      <Link
        to="/SingleProduct"
        onClick={() => {
          ShowProduct(id);
        }}
      >
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
      <i
        className="fa-solid fa-cart-arrow-down"
        onClick={() => {
          HendleAddToCart(id);
        }}
      />
      <div className="proDesc" style={{ display: "none" }}>
        {Description}
      </div>
    </div>
  );
}
