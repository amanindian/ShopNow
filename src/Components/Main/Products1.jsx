import { React, useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import Products from "./Product";

export default function Products1() {
  const { ProLists } = useContext(DataContext);

  const [newLitemList, setnewLitemList] = useState([...ProLists]);


  useEffect(() => {
    setnewLitemList(prevList => prevList.slice(0, 12));
  }, [ProLists]);

  return (
    <section id="product-1">
      <h2>Featured Products</h2>
      <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>


      <div className="container">
        {
          newLitemList.map((element) => {
            return (
              <Products element={element} key={element.id} id={element.id} />
            )
          })
        }
      </div>
    </section>
  );
}
