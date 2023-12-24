import React from "react";
import Feature from "../Main/Feature";
import Products1 from "../Main/Products1";
import Products2 from "../Main/Products2";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <Products1 />
      <Products2 />
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </>
  );
}
