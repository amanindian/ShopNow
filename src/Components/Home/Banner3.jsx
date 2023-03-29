import React from "react";
import "./Banner3.css";

export default function Banner3() {
  const bannerDataa = [
    { title: "SEASONAL SALE", description: "Winter Collection -50% Off" },
    { title: "SEASONAL SALE", description: "Winter Collection -50% Off" },
    { title: "SEASONAL SALE", description: "Winter Collection -50% Off" },
  ];
  return (
    <section id="banner-3">
      {bannerDataa.map((element, index) => {
        return (
          <div className={`banner-3-box  bx${index + 1}`} key={index}>
            <h4>{element.title}</h4>
            <h5>{element.description}</h5>
          </div>
        );
      })}
    </section>
  );
}
