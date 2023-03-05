import React from "react";

export default function Product({ ClickedData }) {



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
                    <button>Add To Cart</button>
                    <h4>{ClickedData.ProTitle}</h4>
                    <span>{ClickedData.ProDescription}</span>
                </div>
            </section>
        </>
    );
}
