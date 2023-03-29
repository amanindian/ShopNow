import React, { useState } from "react";
import BlogHeader from "./BlogHeader";
import BlogData from "./BlogData";
import BlogForm from "./BlogForm";

const Blog = () => {
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogDescription, setBlogDescription] = useState("");
  const [BlogImage, setBlogImage] = useState(null);
  const [AllBlogData, setAllBlogData] = useState([]);

  const BlogSave = (event) => {
    event.preventDefault();
    let NewDataList = [...AllBlogData];
    NewDataList.push({
      BlogDescription: BlogDescription,
      BlogTitle: BlogTitle,
      BlogImage: BlogImage,
    });
    setAllBlogData(NewDataList);
  };

  return (
    <>
      <BlogHeader />
      <BlogData AllBlogData={AllBlogData} />
      <BlogForm
        setBlogDescription={setBlogDescription}
        setBlogTitle={setBlogTitle}
        BlogSave={BlogSave}
        setBlogImage={setBlogImage}
      />
    </>
  );
};

export default Blog;
