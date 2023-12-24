import React, { useContext } from "react";
import "./Style.css";
import Banner from "./Banner";
import CartItem from "./CartItem";
import CartOptions from "./CartOptions";
import { CartContext } from "../../Context/CartData";
import { DataContext } from "../../Context/DataContext";

export default function Cart() {
  const { CartProduct, setCartProduct, setTotalAmount } =
    useContext(CartContext);
  const { ProLists } = useContext(DataContext);


  //Reset Card List and Total Amount
  const ResetCart = () => {
    const resetPermission  =  window.confirm("Do You really want to Reset your Cart")
    if(resetPermission){
      setTotalAmount(0);
      setCartProduct([]);
    }
  };
  const HandlePayment = () => {
    alert("Sorry this website is not for shopping this is only a React JS Project")
  };

  return (
    <React.Fragment>
      <Banner />
      <section className="cart-sec">
        {ProLists.filter((item) => CartProduct.includes(item.id))
          .map((item) => ({
            ...item,
            Quantity:
              CartProduct.reduce((counts, id) => {
                counts[id] = (counts[id] || 0) + 1;
                return counts;
              }, {})[item.id] || 1,
          }))
          .map((Product, Index) => {
            return (
              <CartItem
                Product={Product}
                key={Product.id}
                Index={Index}
              />
            );
          })}
      </section>
      <CartOptions HandlePayment={HandlePayment} ResetCart={ResetCart} />
    </React.Fragment>
  );
}
