import { React, useContext } from "react";
import { DataContext } from "./DataContext";
import Products from "./Product";

export default function Products2({ ShowProduct, HendleAddToCart }) {
  const { ProList2 } = useContext(DataContext);
  return (
    <section id="product-2">
      <h2>New Arrivals</h2>
        <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
        <div className="container">
        {ProList2.map((element, index) => {
          return (
            <Products
              element={element}
              key={index}
              index={index}
              ShowProduct={ShowProduct}
              HendleAddToCart={HendleAddToCart}
            />
          );
        })}
      </div>
    </section>
  );
}
