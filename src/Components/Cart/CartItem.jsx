import React from "react";

export default function CartItem({ Product, Index, HendleRemoveItem }) {
  return (
    <tr>
      <th scope="row">{Index + 1}</th>
      <td className="ProTitle" >{Product.ProTitle}</td>
      <td>{Product.ProPrice}</td>
      <th>
        <button className="btn">-</button>
        <button className="btn ">0</button>
        <button className="btn ">+</button>
      </th>
      <td>
        {" "}
        <button
          index={Index}
          onClick={HendleRemoveItem}
          className="RemoveBtn"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
