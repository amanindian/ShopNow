import { React } from "react";
import useAddToCart from "../../CustomHooks/useAddToCart";
import { Link } from "react-router-dom";

export default function CartItem({ Product, Index }) {
  const [, ShowProduct, HendleRemoveItem, IncriseQuantity, DecriseQuantity] =
    useAddToCart();
  return (
    <div className="cart-item-box">
      <span className="CartSrNo ">{Index + 1}</span>
      <Link
        to="/SingleProduct"
        onClick={() => {
          ShowProduct(Product.id);
        }}
        className="CartImage"
      >
        <img src={Product.Image} width="100%" alt="Product "  />
      </Link>
      <div className="Product-Data">
        <h2 className="ProTitle">{Product.Title}</h2>
        <p className="ProAmount">{Product.Amount}</p>
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
