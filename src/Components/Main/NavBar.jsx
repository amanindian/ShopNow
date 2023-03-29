import React, { useState } from 'react'
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [UlStyle, setUlStyle] = useState({
        right: "-100%"
    })

    function OpenNav() {
        setUlStyle({ right: "0" })
    }
    function CloseNav() {
        setUlStyle({ right: "-100%" })
    }
    return (
        <header>
            <Link className="icon" to="/">ShopNow.com</Link>
            <nav>
                <ul id="openul" style={UlStyle}>
                    <i className="fa-solid fa-circle-xmark" onClick={CloseNav} id="nav-hide" />
                    <li><Link className="active" onClick={CloseNav} to="/">Home </Link></li>
                    <li><Link to="/Shop" onClick={CloseNav}>Shop</Link></li>
                    <li><Link to="/Blogs" onClick={CloseNav}>Blog </Link></li>
                    <li><Link to="/About" onClick={CloseNav}>About</Link></li>
                    <li><Link to="/Contact" onClick={CloseNav}>Contact</Link></li>
                    <li>
                        <Link to="/Cart" onClick={CloseNav}>
                            <i title="Cart" className="fa-solid fa-cart-shopping" />
                        </Link>
                    </li>
                </ul>
                <i className="fa-solid fa-bars" onClick={OpenNav} id="nav-open" />
            </nav>
        </header>

    )
}
