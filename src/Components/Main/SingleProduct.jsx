import React from "react";
import "./SingleProduct.css";
import useAddToCart from "../../CustomHooks/useAddToCart";

export default function SingleProduct() {
  const [HendleAddToCart] = useAddToCart();
  return (
    <section id="prodetails">
      <div className="sing-product-image">
        <img
          src={JSON.parse(localStorage.targetItem).Image}
          width="100%"
          id="MainImg"
          alt="/"
        />
      </div>
      <div id="single-pro-desc">
        <h6>Home / T-shirt</h6>
        <h4 id="about">About</h4>
        <h2 id="MainPrice"> {JSON.parse(localStorage.targetItem).Amount}</h2>
        {/* <select>
          <option>Select Size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select> */}
        {/* <input
          type="number"
          defaultValue={1}
          name="ProQuantity"
          id="ProQuantity"
        /> */}
        <button
          onClick={() => {
            HendleAddToCart(JSON.parse(localStorage.targetItem).id);
          }}
        >
          Add To Cart
        </button>
        <h4>{JSON.parse(localStorage.targetItem).Title}</h4>
        {/* <span>{JSON.parse(localStorage.targetItem).Description}</span> */}
      </div>
    </section>
  );
}
