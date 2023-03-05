import React from 'react'
import "./Style.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <Link className="icon" to="/">ShopNow.com</Link>
            <nav>
                <ul id="openul">
                    <i className="fa-solid fa-circle-xmark" id="nav-hide" />
                    <li><Link className="active" to="/">Home </Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link to="/">Blog </Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/"><i title="Cart" className="fa-solid fa-cart-shopping" /></Link></li>
                </ul>
                <i className="fa-solid fa-bars" id="nav-open" />
            </nav>
        </header>

    )
}
