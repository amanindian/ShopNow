import React, { useContext } from "react";
import "./SingleProduct.css";

import { CartContext } from "../../Context/CartData";

export default function SingleProduct({ ClickedData }) {
  const { CartProduct, setCartProduct, setTotalAmount, totalAmount } =
    useContext(CartContext);

  const HendleAddToCart = (event) => {
    let newCartProduct = [...CartProduct];
    newCartProduct.push({
      ProPrice: event.target.getAttribute("proprice"),
      ProTitle: event.target.getAttribute("protitle"),
    });
    setCartProduct(newCartProduct);
    setTotalAmount(
      Number.parseInt(totalAmount) +
        Number.parseInt(event.target.getAttribute("proprice"))
    );
  };

  return (
    <>
      <section id="prodetails">
        <div className="sing-product-image">
          <img src={ClickedData.ProImage} width="100%" id="MainImg" alt="/" />
        </div>
        <div id="single-pro-desc">
          <h6>Home / T-shirt</h6>
          <h4 id="about">About</h4>
          <h2 id="MainPrice"> {ClickedData.ProPrice}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input
            type="number"
            defaultValue={1}
            name="ProQuantity"
            id="ProQuantity"
          />
          <button
            protitle={ClickedData.ProTitle}
            proprice={ClickedData.ProPrice}
            onClick={HendleAddToCart}
          >
            Add To Cart
          </button>
          <h4>{ClickedData.ProTitle}</h4>
          <span>{ClickedData.ProDescription}</span>
        </div>
      </section>
    </>
  );
}
