import React, { useContext, useState, useEffect } from "react";
import ShopBanner from "./ShopBanner";
import Products1 from "../Main/Products1";
import { CartContext } from "../../Context/CartData";

export default function Shop({ setClickedData }) {
  const { CartProduct, setCartProduct, totalAmount, setTotalAmount } =
    useContext(CartContext);

  const ShowProduct = (e) => {
    let Item = e.target;
    setClickedData({
      ProImage:
        Item.parentElement.parentElement.getElementsByTagName(`img`)[0].src,
      ProPrice:
        Item.parentElement.parentElement.getElementsByClassName(`proprise`)[0]
          .innerHTML,
      ProDescription:
        Item.parentElement.parentElement.getElementsByClassName(`proDesc`)[0]
          .innerHTML,
      ProTitle:
        Item.parentElement.parentElement.getElementsByTagName("h5")[0]
          .innerHTML,
    });
  };

  const HendleAddToCart = (event) => {
    let Item = event.target;
    let newCartProduct = [...CartProduct];
    newCartProduct.push({
      ProPrice:
        Item.parentElement.getElementsByClassName(`proprise`)[0].innerHTML,
      ProTitle: Item.parentElement.getElementsByTagName("h5")[0].innerHTML,
    });
    setCartProduct(newCartProduct);
    setTotalAmount(
      Number.parseInt(totalAmount) +
        Number.parseInt(
          Item.parentElement.getElementsByClassName(`proprise`)[0].innerHTML
        )
    );
  };

  return (
    <React.Fragment>
      <ShopBanner />
      <Products1 ShowProduct={ShowProduct} HendleAddToCart={HendleAddToCart} />
    </React.Fragment>
  );
}

// <ShopBanner />
// <Products1 ShowProduct={ShowProduct} />
