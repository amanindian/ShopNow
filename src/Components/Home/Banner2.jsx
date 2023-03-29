import React from "react";
import "./Banner2.css";

export default function Banner2() {
  const bannerDataa = [
    {
      title: "Crazy Deals",
      description: "The best classic is on seal at cara",
      about: "Buy 1 get 1 free",
      buttontext: "Learn More",
    },
    {
      title: "Spring Summer",
      description: "The best classic is on seal at cara",
      about: "Upcoming Sessions",
      buttontext: "Collection",
    },
  ];
  return (
    <section id="banner-2">
      {bannerDataa.map((element, index) => {
        return (
          <div className={`banner-box banner-box${index + 1}`} key={index}>
            <h4>{element.title}</h4>
            <h2>{element.about}</h2>
            <span>{element.description}</span>
            <button>{element.buttontext}</button>
          </div>
        );
      })}
    </section>
  );
}
