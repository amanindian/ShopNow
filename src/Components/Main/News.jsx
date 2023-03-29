import React from 'react'
import "./News.css"

export default function News() {
    return (
        <section id="news">
            <div className="news-text">
                <h4>Sign Up for Newsletters</h4>
                <p>Get E-mail updates about our letest shop and <span>Special offers</span></p>
            </div>
            <div className="news-form">
                <input type="text" name="Email" placeholder="Enter your E-email address" />
                <button>Sign Up</button>
            </div>
        </section>
    )
}
