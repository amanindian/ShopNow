import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import CartItem from "./CartItem";
import CartOptions from "./CartOptions";
import "./Style.css";

export default function Cart({ setTotalAmount, totalAmount }) {
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
    setTotalAmount(totalAmount - newCartProduct[IndexRemove].ProPrice);
    newCartProduct.splice(IndexRemove, 1);
    setCartProduct(newCartProduct);
    console.log(totalAmount);
  };

  //Reset Card List and Total Amount
  const ResetCart = () => {
    setTotalAmount(0);
    setCartProduct([]);
  };

  return (
    <React.Fragment>
      <Banner />
      <table border="1px" id="myTableData">
        <thead>
          <tr>
            <th scope="col" className="TableHead">
              Sr. NO
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
      <CartOptions totalAmount={totalAmount} ResetCart={ResetCart} />
    </React.Fragment>
  );
}
