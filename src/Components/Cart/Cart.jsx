import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import CartItem from "./CartItem";
import "./Style.css";

export default function Cart() {
  const [CartProduct, setCartProduct] = useState(() => {
    if (localStorage.CartProduct) {
      return JSON.parse(localStorage.CartProduct);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.CartProduct = JSON.stringify(CartProduct);
    setCartProduct(CartProduct);
  }, [CartProduct]);

  //Hendle Remove Item
  const HendleRemoveItem = (event) => {
    const IndexRemove = event.target.getAttribute("index");
    let newCartProduct = [...CartProduct];
    newCartProduct.splice(IndexRemove, 1);
    setCartProduct(newCartProduct);
  };

  return (
    <>
      <Banner />
      <table border="1px">
        <thead>
          <tr>
            <th scope="col" className="TableHead">
              Sr. Number
            </th>
            <th scope="col" className="TableHead">
              Product Name
            </th>
            <th scope="col" className="TableHead">
              Product Amount
            </th>
            <th scope="col" className="TableHead">
              Handle Product
            </th>
            <th scope="col" className="TableHead">
              Remove Product
            </th>
          </tr>
        </thead>
        <tbody>
          {CartProduct.map((Product, Index) => {
            return (
              <CartItem
                Product={Product}
                key={Index}
                Index={Index}
                HendleRemoveItem={HendleRemoveItem}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
