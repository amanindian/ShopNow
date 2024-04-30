import { React, createContext } from "react";

//Import Images
import f1 from "../Image/products/f1.jpg";
import f2 from "../Image/products/f2.jpg";
import f3 from "../Image/products/f3.jpg";
import f4 from "../Image/products/f4.jpg";
import f5 from "../Image/products/f5.jpg";
import f6 from "../Image/products/f6.jpg";
import f7 from "../Image/products/f7.jpg";
import f8 from "../Image/products/f8.jpg";

import n1 from "../Image/products/n1.jpg";
import n2 from "../Image/products/n2.jpg";
import n3 from "../Image/products/n3.jpg";
import n4 from "../Image/products/n4.jpg";
import n5 from "../Image/products/n5.jpg";
import n6 from "../Image/products/n6.jpg";
import n7 from "../Image/products/n7.jpg";
import n8 from "../Image/products/f8.jpg";

import new1 from "../Image/New Items/n1.jpg";
import new2 from "../Image/New Items/n2.jpg";
import new3 from "../Image/New Items/n3.jpg";
import new4 from "../Image/New Items/n4.jpg";
import new5 from "../Image/New Items/n5.jpg";
import new6 from "../Image/New Items/n6.jpg";
import new7 from "../Image/New Items/n7.jpg";
import new8 from "../Image/New Items/n8.jpg";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  let defaultTitle = "This is title";
  const ProLists = [
    {
      id: 1,
      Title: "This is my title",
      Image: f1,
      Images: [f1, f2],
      category: "old",
      categorys: ["old", "man"],
      Amount: 789,
      Short_Description: "ShopNow, your ultimate destination for online shopping! ShopNow is a cutting-edge web application designed with the latest technologies including HTML, CSS, JavaScript, and React JS. Our platform provides customers "
    },
    {
      id: 2,
      Title: defaultTitle,
      Image: f2,
      category: "old",
      categorys: ["old"],
      Amount: 9999,
    },
    {
      id: 3,
      Title: defaultTitle,
      Image: f3,
      category: "old",
      categorys: ["old", "men"],
      Amount: 5005,
    },
    {
      id: 4,
      Title: defaultTitle,
      Image: f4,
      category: "old",
      categorys: ["old", "men"],
      Amount: 5090,
    },
    {
      id: 5,
      Title: "Ye mera short hai",
      Image: f5,
      category: "old",
      categorys: ["old", "men"],
      Amount: 5008,
    },
    {
      id: 6,
      Title: defaultTitle,
      Image: f6,
      category: "old",
      categorys: ["old"],
      Amount: 550,
    },
    {
      id: 7,
      Title: defaultTitle,
      Image: f7,
      category: "old",
      categorys: ["old", "women"],
      Amount: 500,
    },
    {
      id: 8,
      Title: defaultTitle,
      Image: f8,
      category: "old",
      categorys: ["old"],
      Amount: 500,
    },
    {
      id: 9,
      Title: defaultTitle,
      Image: n1,
      category: "old",
      categorys: ["old", "men"],
      Amount: 789,
    },
    {
      id: 10,
      Title: defaultTitle,
      Image: n2,
      category: "old",
      categorys: ["old"],
      Amount: 9999,
    },
    {
      id: 11,
      Title: defaultTitle,
      Image: n3,
      category: "old",
      categorys: ["old", "men"],
      Amount: 5005,
    },
    {
      id: 12,
      Title: defaultTitle,
      Image: n4,
      category: "old",
      categorys: ["old"],
      Amount: 5090,
    },
    {
      id: 13,
      Title: defaultTitle,
      Image: n5,
      category: "old",
      categorys: ["old"],
      Amount: 5008,
    },
    {
      id: 14,
      Title: defaultTitle,
      Image: n6,
      category: "old",
      categorys: ["old"],
      Amount: 550,
    },
    {
      id: 15,
      Title: defaultTitle,
      Image: n7,
      category: "old",
      categorys: ["old"],
      Amount: 500,
    },
    {
      id: 16,
      Title: defaultTitle,
      Image: n8,
      category: "old",
      categorys: ["old", "women"],
      Amount: 500,
    },
    {
      id: 17,
      Title: defaultTitle,
      Image: new1,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 18,
      Title: defaultTitle,
      Image: new2,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 19,
      Title: defaultTitle,
      Image: new3,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 20,
      Title: defaultTitle,
      Image: new4,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 21,
      Title: defaultTitle,
      Image: new5,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 22,
      Title: defaultTitle,
      Image: new6,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 23,
      Title: defaultTitle,
      Image: new7,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
    {
      id: 24,
      Title: defaultTitle,
      Image: new8,
      category: "new",
      categorys: ["new"],
      Amount: 500,
    },
  ];


  return (
    <DataContext.Provider value={{ ProLists }}>{children}</DataContext.Provider>
  );
};
