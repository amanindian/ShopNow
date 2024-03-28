import { React, useContext } from "react";
import { CartContext } from "../../Context/CartData";

export default function CartOptions({ ResetCart, HandlePayment }) {
  const { totalAmount } = useContext(CartContext);

  return (
    <div className="CartOpt">
      <div className="OptBtn" onClick={ResetCart}>
        Reset
      </div>
      <div className="OptBtn">Total Amount: &#8377;{totalAmount}</div>
      <div className="OptBtn" onClick={HandlePayment}>
        Pay Now
      </div>
    </div>
  );
}
