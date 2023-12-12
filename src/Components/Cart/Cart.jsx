import React, { useContext } from "react";
import Banner from "./Banner";
import CartItem from "./CartItem";
import CartOptions from "./CartOptions";
import "./Style.css";
import { CartContext } from "../../Context/CartData";

export default function Cart() {
  const { CartProduct, setCartProduct ,totalAmount ,setTotalAmount} = useContext(CartContext);

  //Hendle Remove Item
  const HendleRemoveItem = (event) => {
    const IndexRemove = event.target.getAttribute("index");
    let newCartProduct = [...CartProduct];
    setTotalAmount(totalAmount - newCartProduct[IndexRemove].ProPrice);
    newCartProduct.splice(IndexRemove, 1);
    setCartProduct(newCartProduct);
  };

  //Reset Card List and Total Amount
  const ResetCart = () => {
    setTotalAmount(0);
    setCartProduct([]);
  };

  return (
    <React.Fragment>
      <Banner />
      <table border="1px" id="myTableData">
        <thead>
          <tr>
            <th scope="col" className="TableHead">
              Sr. NO
            </th>
            <th scope="col" className="TableHead">
              Product Name
            </th>
            <th scope="col" className="TableHead">
              Product Amount
            </th>
            <th scope="col" className="TableHead">
              Handle Product
            </th>
            <th scope="col" className="TableHead">
              Remove Product
            </th>
          </tr>
        </thead>
        <tbody>
          {CartProduct.map((Product, Index) => {
            return (
              <CartItem
                Product={Product}
                key={Index}
                Index={Index}
                HendleRemoveItem={HendleRemoveItem}
              />
            );
          })}
        </tbody>
      </table>
      <CartOptions ResetCart={ResetCart} />
    </React.Fragment>
  );
}
