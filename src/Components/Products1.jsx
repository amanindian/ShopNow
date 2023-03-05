import React from "react";
import f1 from "../Image/products/f1.jpg";
import f2 from "../Image/products/f2.jpg";
import f3 from "../Image/products/f3.jpg";
import f4 from "../Image/products/f4.jpg";
import f5 from "../Image/products/f5.jpg";
import f6 from "../Image/products/f6.jpg";
import f7 from "../Image/products/f7.jpg";
import f8 from "../Image/products/f8.jpg";
import { Link } from "react-router-dom";

export default function Products1({ ShowProduct }) {
  let defaultdDes =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum aperiam adipisci amet suscipit, nulla dolores doloremque excepturi eos, earum provident. Inventore aut quas expedita dolor, pariatur cupiditate alias aperiam culpa, sunt ullam ab aliquam cumque officia! Est non consequuntur ipsam aperiam quo quas pariatur repellat, voluptates voluptatem quis. Sed?";
  let defaultTitle = "This is title";
  const ProList = [
    {
      Title: defaultTitle,
      Image: f1,
      Description: defaultdDes,
      Amount: 789,
    },
    {
      Title: defaultTitle,
      Image: f2,
      Description: defaultdDes,
      Amount: 9999,
    },
    {
      Title: defaultTitle,
      Image: f3,
      Description: defaultdDes,
      Amount: 5005,
    },
    {
      Title: defaultTitle,
      Image: f4,
      Description: defaultdDes,
      Amount: 5090,
    },
    {
      Title: defaultTitle,
      Image: f5,
      Description: defaultdDes,
      Amount: 5008,
    },
    {
      Title: defaultTitle,
      Image: f6,
      Description: defaultdDes,
      Amount: 550,
    },
    {
      Title: defaultTitle,
      Image: f7,
      Description: defaultdDes,
      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: f8,
      Description: defaultdDes,
      Amount: 500,
    },
  ];

  return (
    <section id="product-1">
      <h2>Featured Products</h2>
      <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
      <div className="container">
        {ProList.map((element, index) => {
          return (
            <div className="pro" key={index}>
              <Link to="/ShowProductDetails" onClick={ShowProduct}>
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
              <a href="/">
                {" "}
                <i className="fa-solid fa-cart-arrow-down" />
              </a>
              <div className="proDesc" style={{ display: "none" }}>
                {element.Description}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
