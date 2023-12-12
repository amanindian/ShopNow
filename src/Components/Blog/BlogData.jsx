import { React, useContext } from "react";
import { BlogDataContex } from "../../Context/BlogData";

export default function BlogData() {
  const { AllBlogData, setAllBlogData } = useContext(BlogDataContex);

  const HandleRemoveBlog = (e) => {
    const index = e.target.getAttribute("index");
    let newBlogList = [...AllBlogData];
    newBlogList.splice(index, 1);
    setAllBlogData(newBlogList);
  };

  return (
    <section className="blog-box">
      {AllBlogData.map((Element, Index) => (
        <div key={Index}>
          <div className="blog-content">
            <svg
              style={{ position: "absolute", top: "10px", right: "15px" }}
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="40"
              viewBox="0 0 512 512"
              index={Index}
              onClick={(e) => {
                HandleRemoveBlog(e);
              }}
            >
              <path
                index={Index}
                onClick={(e) => {
                  HandleRemoveBlog(e);
                }}
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
              />
            </svg>
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
