import { React } from "react";
import useAddToCart from "../../CustomHooks/useAddToCart";

export default function CartItem({ Product, Index }) {
  const [, ShowProduct, HendleRemoveItem, IncriseQuantity, DecriseQuantity] =
    useAddToCart();
  return (
    <div className="cart-item-box">
      <span className="CartSrNo ">{Index + 1}</span>

      <img className="CartImage" onClick={() => {
        ShowProduct(Product.id);
      }} src={Product.Image} width="100%" alt="Product " />

      <div className="Product-Data">
        <h2 className="ProTitle">{Product.Title}</h2>
        <p className="ProAmount">&#8377;{Product.Amount}</p>
        <div className="quantity-buttons">
          <button
            className="btn-qt"
            onClick={() => {
              DecriseQuantity(Product.id);
            }}
          >
            -
          </button>
          <button className="btn-qt">{Product.Quantity}</button>
          <button
            className="btn-qt"
            onClick={() => {
              IncriseQuantity(Product.id);
            }}
          >
            +
          </button>
        </div>
        <button
          index={Index}
          onClick={() => {
            HendleRemoveItem(Product.id);
          }}
          className="RemoveBtn"
        >
          Remove Product
        </button>
      </div>
    </div>
  );
}

// Image
