import { React, createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartData = ({ children }) => {
  //All Cart Items 
  const [CartProduct, setCartProduct] = useState(() => {
    if (localStorage.CartProduct) {
      return JSON.parse(localStorage.CartProduct);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.CartProduct = JSON.stringify(CartProduct);
    setCartProduct(CartProduct);
  }, [CartProduct]);

  // Total Amount
  const [totalAmount, setTotalAmount] = useState(() => {
    if (localStorage.totalAmount) {
      return JSON.parse(localStorage.totalAmount);
    } else {
      return 0;
    }
  });
  useEffect(() => {
    localStorage.totalAmount = JSON.stringify(totalAmount);
  }, [totalAmount]);

  return (
    <CartContext.Provider value={{ CartProduct,setCartProduct,totalAmount ,setTotalAmount}}>
      {children}
    </CartContext.Provider>
  );
};
