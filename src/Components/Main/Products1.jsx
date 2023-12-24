import { React, useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import Products from "./Product";

export default function Products1() {
  const { ProLists } = useContext(DataContext);

  return (
    <section id="product-1">
      <h2>Featured Products</h2>
      <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
      <div className="container">
        {/* This below filter method filtring only "old" category products from ProLists */}
        {ProLists.filter((e) => {
          return e.category === "old";
        }).map((element) => {
          return (
            <Products element={element} key={element.id} id={element.id} />
          );
        })}
      </div>
    </section>
  );
}
