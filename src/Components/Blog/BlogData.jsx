import React from "react";
import "./Style.css";

export default function BlogData({ AllBlogData }) {
  return (
    <section className="blog-box">
      {AllBlogData.map((Element, Index) => (
        <div key={Index}>
          <div className="blog-content">
            <div>
              <div className="blog-title">{Element.BlogTitle}</div>
              <div className="blog-desc">{Element.BlogDescription}</div>
            </div>
            <div>
              {Element.BlogImage && (
                <img
                  className="blog-img"
                  src={Element.BlogImage}
                  alt="Upload Blog Pic"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}