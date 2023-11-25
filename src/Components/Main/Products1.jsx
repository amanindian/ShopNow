import {React ,useContext} from "react";
import { DataContext } from "./DataContext";
import Products from "./Product";

export default function Products1({ ShowProduct, HendleAddToCart }) {
 const {ProList1}=  useContext(DataContext)
  return (
    <section id="product-1">
      <h2>Featured Products</h2>
      <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
      <div className="container">
        {ProList1.map((element, index) => {
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
