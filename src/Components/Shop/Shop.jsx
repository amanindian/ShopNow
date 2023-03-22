import React from 'react'
import ShopBanner from "./ShopBanner"
import Products1 from "../Main/Products1"

export default function Shop({setClickedData}) {
  const ShowProduct = (e) => {
    let Item = e.target;
    setClickedData({
      ProImage: Item.parentElement.parentElement.getElementsByTagName(`img`)[0]
        .src,
      ProPrice: Item.parentElement.parentElement.getElementsByClassName(
        `proprise`
      )[0].innerHTML,
      ProDescription: Item.parentElement.parentElement.getElementsByClassName(
        `proDesc`
      )[0].innerHTML,
      ProTitle: Item.parentElement.parentElement.getElementsByTagName("h5")[0]
        .innerHTML,
    });
  };


  return (

    <React.Fragment>
      <ShopBanner />
      <Products1 ShowProduct={ShowProduct} />
    </React.Fragment>
  )
}

// <ShopBanner />
// <Products1 ShowProduct={ShowProduct} />