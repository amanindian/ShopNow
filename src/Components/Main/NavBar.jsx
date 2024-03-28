import React, { useState, useContext } from 'react'
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartData";


export default function NavBar() {
    const { CartProduct } = useContext(CartContext);

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
            <NavLink className="icon" to="/">ShopNow.com</NavLink>
            <nav>
                <ul id="openul" style={UlStyle}>
                    <i className="fa-solid fa-circle-xmark" onClick={CloseNav} id="nav-hide" />
                    <li><NavLink to="/" onClick={CloseNav} >Home </NavLink></li>
                    <li><NavLink to="/About" onClick={CloseNav}>About</NavLink></li>
                    <li><NavLink to="/Shop" onClick={CloseNav}>Shop</NavLink></li>
                    <li><NavLink to="/Blogs" onClick={CloseNav}>Blog </NavLink></li>
                    <li><NavLink to="/Contact" onClick={CloseNav}>Contact</NavLink></li>
                    <li>
                        <NavLink to="/Cart" onClick={CloseNav}>
                            <i title="Cart" className="fa-solid fa-cart-shopping" />
                            <span className='stickey-cart-item' >{CartProduct.length}</span>
                        </NavLink>
                    </li>
                </ul>
                <i className="fa-solid fa-bars" onClick={OpenNav} id="nav-open" />
            </nav>
        </header>

    )
}
