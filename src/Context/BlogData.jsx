import { React, createContext, useState, useEffect } from "react";

export const BlogDataContex = createContext();
export const BlogData = ({ children }) => {
  const [AllBlogData, setAllBlogData] = useState(() => {
    if (localStorage.AllBlogData) {
      return JSON.parse(localStorage.AllBlogData);
    } else {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.AllBlogData = JSON.stringify(AllBlogData);
      setAllBlogData(AllBlogData);
    } catch (error) {
      console.log(error);
    }
  }, [AllBlogData]);

  return (
    <BlogDataContex.Provider value={{ AllBlogData, setAllBlogData }}>
      {children}
    </BlogDataContex.Provider>
  );
};
