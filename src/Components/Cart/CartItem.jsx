import React from "react";

export default function CartItem({ Product, Index, HendleRemoveItem }) {
  return (
    <tr>
      <td className="CartSrNo">{Index + 1}</td>
      <td className="ProTitle">{Product.ProTitle}</td>
      <td className="CartPrice">{Product.ProPrice}</td>
      <td>
        <button className="btn">-</button>
        <button className="btn ">0</button>
        <button className="btn ">+</button>
      </td>
      <td>
        {" "}
        <button index={Index} onClick={HendleRemoveItem} className="RemoveBtn">
          Remove
        </button>
      </td>
    </tr>
  );
}
