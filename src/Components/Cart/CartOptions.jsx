import React from "react";

export default function CartOptions({ totalAmount, ResetCart }) {
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
