import React, { useState, useContext, useEffect } from "react";
import "./SingleProduct.css";
import useAddToCart from "../../CustomHooks/useAddToCart";
import { useLocation } from "react-router-dom";


import { DataContext } from "../../Context/DataContext";

export default function SingleProduct() {
  const [HendleAddToCart] = useAddToCart();
  const nagivate = useLocation()
  const { ProLists } = useContext(DataContext);
  const [item, setItem] = useState({
    id: 24,
    Title: "defaultTitle",
    Image: "new8",
    category: "new",
    categorys: ["new"],
    Amount: 500,
  })

  useEffect(() => {
    const item = ProLists.find((item) => { return item.id === nagivate.state.id })
    setItem(item)
  }, [nagivate, ProLists])

  return (
    <section id="prodetails">
      <div className="sing-product-image">
        <img
          src={item.Image}
          width="100%"
          id="MainImg"
          alt="/"
        />
      </div>
      <div id="single-pro-desc">
        <h6>Home / T-shirt</h6>
        <h4 id="about">About</h4>
        <h2 id="MainPrice"> &#8377;{item.Amount}</h2>
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
            HendleAddToCart(item.id);
          }}
        >
          Add To Cart
        </button>
        <h4>{item.Title}</h4>
        {/* <span>{JSON.parse(localStorage.targetItem).Description}</span> */}
      </div>
    </section>
  );
}
