import React, { useState, useEffect } from "react";

export default function Product({ ClickedData, setNewCartProduct }) {

    const [CartProduct, setCartProduct] = useState(() => {
        if (localStorage.CartProduct) {
            return JSON.parse(localStorage.CartProduct);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.CartProduct = JSON.stringify(CartProduct);
        setNewCartProduct(CartProduct)
    }, [CartProduct]);

    const HendleAddToCart = (event) => {
        let newCartProduct = [...CartProduct];
        console.log(newCartProduct);
        newCartProduct.push({
            ProPrice: event.target.getAttribute("proprice"),
            ProTitle: event.target.getAttribute("protitle")
        });
        setCartProduct(newCartProduct);
    };


    return (
        <>
            <section id="prodetails">
                <div className="sing-product-image">
                    <img src={ClickedData.ProImage} width="100%" id="MainImg" alt="/" />
                </div>
                <div id="single-pro-desc">
                    <h6>Home / T-shirt</h6>
                    <h4 id="about" >About</h4>
                    <h2 id="MainPrice"> {ClickedData.ProPrice}</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" defaultValue={1} name="ProQuantity" id="ProQuantity" />
                    <button protitle={ClickedData.ProTitle} proprice={ClickedData.ProPrice} onClick={HendleAddToCart}>Add To Cart</button>
                    <h4>{ClickedData.ProTitle}</h4>
                    <span>{ClickedData.ProDescription}</span>
                </div>
            </section>
        </>
    );
}
