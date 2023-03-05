import React from 'react'
import n1 from '../Image/products/n1.jpg'
import n2 from '../Image/products/n2.jpg'
import n3 from '../Image/products/n3.jpg'
import n4 from '../Image/products/n4.jpg'
import n5 from '../Image/products/n5.jpg'
import n6 from '../Image/products/n6.jpg'
import n7 from '../Image/products/n7.jpg'
import n8 from '../Image/products/n8.jpg'
import { Link } from 'react-router-dom'

let defaultdDes =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laborum aperiam adipisci amet suscipit, nulla dolores doloremque excepturi eos, earum provident. Inventore aut quas expedita dolor, pariatur cupiditate alias aperiam culpa, sunt ullam ab aliquam cumque officia! Est non consequuntur ipsam aperiam quo quas pariatur repellat, voluptates voluptatem quis. Sed?";
let defaultTitle = "This is title";
const ProList = [
    {
        Title: defaultTitle,
        Image: n1,
        Description: defaultdDes,
        Amount: 789,
    },
    {
        Title: defaultTitle,
        Image: n2,
        Description: defaultdDes,
        Amount: 9999,
    },
    {
        Title: defaultTitle,
        Image: n3,
        Description: defaultdDes,
        Amount: 5005,
    },
    {
        Title: defaultTitle,
        Image: n4,
        Description: defaultdDes,
        Amount: 5090,
    },
    {
        Title: defaultTitle,
        Image: n5,
        Description: defaultdDes,
        Amount: 5008,
    },
    {
        Title: defaultTitle,
        Image: n6,
        Description: defaultdDes,
        Amount: 550,
    },
    {
        Title: defaultTitle,
        Image: n7,
        Description: defaultdDes,
        Amount: 500,
    },
    {
        Title: defaultTitle,
        Image: n8,
        Description: defaultdDes,
        Amount: 500,
    },
];



export default function Products2({ ShowProduct }) {
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
                            <a href="/"> <i className="fa-solid fa-cart-arrow-down" /></a>
                            <div className="proDesc" style={{ display: "none" }}>{element.Description}</div>
                        </div>
                    );
                })}
            </div>
        </section>

    )
}
