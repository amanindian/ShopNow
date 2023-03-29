import React from 'react'
import { ProList2 as ProList } from "./Data"
import Products from "./Product"


export default function Products2({ ShowProduct, HendleAddToCart }) {

    return (
        <section id="product-2">
            <h2>New Arrivals</h2>
            <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
            <div className="container">
                {ProList.map((element, index) => {
                    return (
                        <Products element={element} key={index} index={index} ShowProduct={ShowProduct} HendleAddToCart={HendleAddToCart} />
                    );
                })}
            </div>
        </section>

    )
}
