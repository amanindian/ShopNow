import React, { useState, useContext, useEffect } from "react";
import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import useAddToCart from "../../CustomHooks/useAddToCart";
import { DataContext } from "../../Context/DataContext";
import PageNotFound from "./PageNotFound";

export default function SingleProduct() {
  const [HendleAddToCart] = useAddToCart();

  const { ProLists } = useContext(DataContext);
  const [item, setItem] = useState({})
  const { id } = useParams()
  
  useEffect(() => {
    async function fatchProduct() {
      const item = await ProLists.find((item) => { return item.id === Number.parseInt(id) })
      setItem(item)
    }
    fatchProduct()
  }, [ProLists, id])

  if (!item) {
    return <PageNotFound Page_Type="Product" />;
  }


  return (
    <section id="prodetails">
      <div className="sing-product-image">
        <img
          src={item.Image}
          width="100%"
          id="MainImg"
          alt={`ShopNow Product Number ${item.id}`}
        />
      </div>
      <div id="single-pro-desc">
        <p>Shop &gt;
          {[item.categorys].map((catg) => {
            return ` ${catg}`
          })} &gt; {item.Title}
        </p>
        <h4 id="about">About Product</h4>
        <h4 id="MainPrice"> &#8377;{item.Amount}</h4>
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
        />  */}
        <h2>{item.Title}</h2>
        <p className="sort-desc">{item.Short_Description ? item.Short_Description : "Short Description not available"}</p>
        <button
          onClick={() => {
            HendleAddToCart(item.id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </section>
  );
}
