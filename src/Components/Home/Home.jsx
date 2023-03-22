import React from 'react'
import Feature from '../Main/Feature'
import Products1 from '../Main/Products1'
import Products2 from '../Main/Products2'
import Header from "./Header"

export default function Home({ setClickedData }) {

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

    return (<>
        <Header />
        <Feature />
        <Products1 ShowProduct={ShowProduct} />
        <Products2 ShowProduct={ShowProduct} />
    </>
    )
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