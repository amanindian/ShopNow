import React from 'react'
import applestor from '../Image/pay/app.jpg'
import playstor from '../Image/pay/play.jpg'



export default function Footer() {
    return (
        <footer id="footer">
            <div className="col">
                <a className="icon" href="/">ShopNow.com</a>
                <h4>Contact</h4>
                <p><strong>Address:</strong>Siwan, BIhar, India</p>
                <p><strong>Phone:</strong>+918002579962</p>
                <p><strong>Hours:</strong>10:00 - 18:00(Monday - Sunday)</p>
                <h4>Follow</h4>
                <div className="follow-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amanindian/"><i className="fa-brands fa-linkedin" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/amankrindian/"><i className="fa-brands fa-facebook" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/amankrindian"><i className="fa-brands fa-twitter" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMr7miKWktz7vXj7zydHBcQ"><i className="fa-brands fa-youtube" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/amankumar80025/"><i className="fa-brands fa-instagram" /></a>
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="/">About Us</a>
                <a href="/">Delivery Information</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms &amp; Conditions</a>
                <a href="/">Contact Us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="/">Sign In</a>
                <a href="/">View Cart</a>
                <a href="/">My Watchlist</a>
                <a href="/">Track My Order</a>
                <a href="/">Help</a>
            </div>
            <div className="col">
                <h4>Install App</h4>
                <p>From App Stor or Google Play Store</p>
                <div className="install-img">
                    <img src={applestor} alt="Download from App Store" />
                    <img src={playstor} alt="Download from Google Play Store" />
                </div>
                <p>Secure Payment Getway</p>
                <img src="img/pay/pay.png" alt="Download from Google Play Store" />
            </div>
        </footer>
    )
}
