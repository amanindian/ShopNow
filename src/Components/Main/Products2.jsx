import React from 'react'
import { Link } from 'react-router-dom'
import { ProList2 as ProList } from "./item"



export default function Products2({ ShowProduct, HendleAddToCart }) {

    return (
        <section id="product-2">
            <h2>New Arrivals</h2>
            <p style={{ fontSize: 20 }}>Summer Collection New Moder Desine</p>
            <div className="container">
                {ProList.map((element, index) => {
                    return (
                        <div className="pro" key={index}>
                            <Link to="/ShowProductDetails" onClick={ShowProduct}>
                                <img className="ProClickImg" src={element.Image} alt="/" />
                            </Link>
                            <div className="des">
                                <span>adidas</span>
                                <h5 className="about">{element.Title}</h5>
                                <div className="star">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                                <h4 className="proprise">{element.Amount}</h4>
                            </div>
                            <i className="fa-solid fa-cart-arrow-down" onClick={HendleAddToCart} />
                            <div className="proDesc" style={{ display: "none" }}>{element.Description}</div>
                        </div>
                    );
                })}
            </div>
        </section>

    )
}
