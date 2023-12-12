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
  const ProList1 = [
    {
      Title: defaultTitle,
      Image: f1,

      Amount: 789,
    },
    {
      Title: defaultTitle,
      Image: f2,

      Amount: 9999,
    },
    {
      Title: defaultTitle,
      Image: f3,

      Amount: 5005,
    },
    {
      Title: defaultTitle,
      Image: f4,

      Amount: 5090,
    },
    {
      Title: defaultTitle,
      Image: f5,

      Amount: 5008,
    },
    {
      Title: defaultTitle,
      Image: f6,

      Amount: 550,
    },
    {
      Title: defaultTitle,
      Image: f7,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: f8,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: n1,

      Amount: 789,
    },
    {
      Title: defaultTitle,
      Image: n2,

      Amount: 9999,
    },
    {
      Title: defaultTitle,
      Image: n3,

      Amount: 5005,
    },
    {
      Title: defaultTitle,
      Image: n4,

      Amount: 5090,
    },
    {
      Title: defaultTitle,
      Image: n5,

      Amount: 5008,
    },
    {
      Title: defaultTitle,
      Image: n6,

      Amount: 550,
    },
    {
      Title: defaultTitle,
      Image: n7,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: n8,

      Amount: 500,
    },
  ];

  const ProList2 = [
    {
      Title: defaultTitle,
      Image: new1,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new2,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new3,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new4,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new5,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new6,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new7,

      Amount: 500,
    },
    {
      Title: defaultTitle,
      Image: new8,

      Amount: 500,
    },
  ];

  return (
    <DataContext.Provider value={{ ProList1, ProList2 }}>
      {children}
    </DataContext.Provider>
  );
};
