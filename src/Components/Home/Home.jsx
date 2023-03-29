import React, { useState, useEffect } from "react";
import Feature from "../Main/Feature";
import Products1 from "../Main/Products1";
import Products2 from "../Main/Products2";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Header from "./Header";

export default function Home({ setClickedData, setNewCartProduct }) {
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
    }, [CartProduct,setNewCartProduct]);

    const HendleAddToCart = (event) => {
        let Item = event.target;
        let newCartProduct = [...CartProduct];
        newCartProduct.push({
            ProPrice: Item.parentElement.getElementsByClassName(`proprise`)[0]
                .innerHTML,
            ProTitle: Item.parentElement.getElementsByTagName("h5")[0].innerHTML,
        });
        setCartProduct(newCartProduct);
    };

    return (
        <>
            <Header />
            <Feature />
            <Products1 ShowProduct={ShowProduct} HendleAddToCart={HendleAddToCart} />
            <Products2 ShowProduct={ShowProduct} HendleAddToCart={HendleAddToCart} />
            <Banner1/>
            <Banner2/>
            <Banner3/>

        </>
    );
}

// <>
// <Header />
// <Feature />
// <Products1 ShowProduct={ShowProduct} />
// <Banner1 />
// <Products2 ShowProduct={ShowProduct} />
// <Banner2 />
// <Banner3 />
// </>
