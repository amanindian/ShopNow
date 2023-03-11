import React from 'react'
import "./Style.css"

export default function BlogData({ AllBlogData }) {
  return (
    <section className="blog-box">
      {AllBlogData.map((Element, Index) => (
        <div className="blog-content" key={Index}>
          <div className="blog-title">{Element.BlogTitle}</div>
          <div className="blog-desc">{Element.BlogDescription}</div>
        </div>
      ))}
    </section>
  )
}

/* <div className="blog-img" style={{backgroundImage: 'url(${localStorage.Bimage})'}} /> */ 