import React from "react";

export default function Details() {
  return (
    <div className="details">
      <span>GET IN TOUCH</span>
      <h2>Visit one of our company's locations or contact us today</h2>
      <h3>Head Office</h3>
      <div>
        <li>
          <i className="fa-regular fa-map" />
          <p>Siwan, BIhar, India</p>
        </li>
        <li>
          <i className="fa-solid fa-phone" />
          <p><a href="tel:+918002579962">+918002579962</a></p>
        </li>
        <li>
          <i className="fa-regular fa-envelope" />
          <p ><a href="mailto:kramanpandey53@gmail.com" >kramanpandey53@gmail.com</a></p>
        </li>

      </div>
    </div >
  );
}
