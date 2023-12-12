import React, { useState, useEffect } from "react";
import "./Style.css";

export default function BlogForm({
  setBlogTitle,
  setBlogDescription,
  BlogSave,
  setBlogImage,
}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    if (storedImage) {
      setImage(storedImage);
    }
    if (image) {
      setBlogImage(image);
    }
  }, [image, setBlogImage]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImage(imageDataUrl);
      localStorage.setItem("image", imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section id="blog-input">
      <form onSubmit={BlogSave}>
        <h2 style={{ marginBottom: "10" }}>Post Your First Blog</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Enter Blog Title"
          id="Blog-title"
          name="title"
          onChange={(e) => {
            setBlogTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          accept="image/*"
          id="Blog-image"
          name="image"
          onChange={handleFileUpload}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          placeholder="Enter Blog Description"
          id="Blog-description"
          name="description"
          defaultValue={""}
          onChange={(e) => {
            setBlogDescription(e.target.value);
          }}
        />
        <br />
        <div id="Blog-Submit" onClick={BlogSave} type="submit">
          Submit
        </div>
      </form>
    </section>
  );
}