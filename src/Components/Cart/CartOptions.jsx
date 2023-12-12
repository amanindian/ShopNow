import { React, useContext } from "react";
import { CartContext } from "../../Context/CartData";

export default function CartOptions({ResetCart}) {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="CartOpt">
      <div className="OptBtn" onClick={ResetCart}>
        Reset
      </div>
      <div className="OptBtn">Total Amount: {totalAmount}</div>
      <div className="OptBtn">Pay Now</div>
    </div>
  );
}
