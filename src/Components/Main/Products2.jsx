import { React, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Products from "./Product";

export default function Products2({ ShowProduct, HendleAddToCart }) {
  const { ProLists } = useContext(DataContext);
  return (
    <section id="product-2">
      <h2>New Arrivals</h2>
      <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
      <div className="container">
        {/* This below filter method filtring only "new" category products from ProLists */}
        {ProLists.filter((e) => {
          return e.category === "new";
        }).map((element) => {
          return (
            <Products
              element={element}
              key={element.id}
              id={element.id}
              ShowProduct={ShowProduct}
              HendleAddToCart={HendleAddToCart}
            />
          );
        })}
      </div>
    </section>
  );
}
