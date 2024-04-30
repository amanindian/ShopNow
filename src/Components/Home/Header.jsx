import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <section id="hero">
            <h4>Trade-in-offer</h4>
            <h2>Super value Deal</h2>
            <h1>On all Products</h1>
            <p>Save more on coupons &amp; up to 70% off!</p>
            <Link to='/shop'>Shop Now</Link>
        </section>
    )
}
