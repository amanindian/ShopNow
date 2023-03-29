import React from "react";
import { ProList1 as ProList } from "./Data"

import Products from "./Product"

export default function Products1({ ShowProduct, HendleAddToCart }) {
  return (
    <section id="product-1">
      <h2>Featured Products</h2>
      <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
      <div className="container">
        {ProList.map((element, index) => {
          return (
            <Products element={element} key={index} index={index} ShowProduct={ShowProduct} HendleAddToCart={HendleAddToCart} />
          );
        })}
      </div>
    </section>
  );
}