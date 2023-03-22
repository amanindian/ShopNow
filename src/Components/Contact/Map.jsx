import React from "react";

export default function Map() {

  return (
    <div className="map">
      <iframe
        title="AMAN DIGITAL SERVICES"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.0700163408274!2d84.32855602554673!3d26.29183013030011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ff8bc28ef74d%3A0x88410757469b7340!2sAMAN%20DIGITAL%20SERVICE!5e0!3m2!1sen!2sin!4v1675751530990!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}


// Coming This Error: [Violation] Added non-passive event listener to a scroll-blocking <some> event. Consider marking event handler as 'passive' to make the page more responsive. See <URL>