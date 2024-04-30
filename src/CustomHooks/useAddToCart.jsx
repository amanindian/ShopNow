import { useContext } from "react";
import { CartContext } from "../Context/CartData";
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";


export default function useAddToCart() {
  const { ProLists } = useContext(DataContext);
  const { CartProduct, setCartProduct, setTotalAmount } =
    useContext(CartContext);

  //For Handling Add to cart
  const HendleAddToCart = (targetId) => {
    let newCartProduct = [...CartProduct];
    newCartProduct.push(targetId);
    setCartProduct(newCartProduct);
    setTotalAmount((prevValue) => {
      return prevValue + ProLists.find((item) => item.id === targetId).Amount;
    });
  };

  const HendleRemoveItem = (targetId) => {
    const newCartProduct = CartProduct.filter((item) => {
      return item !== targetId;
    });
    setCartProduct(newCartProduct);
    const newCartProductforamount = CartProduct.filter((item) => {
      return item === targetId;
    });
    const RemoveProduct = ProLists.find((item) => {
      return item.id === newCartProductforamount[0];
    });

    setTotalAmount((prevValue) => {
      return (
        prevValue -
        Number.parseInt(RemoveProduct.Amount) *
        Number.parseInt(newCartProductforamount.length)
      );
    });
  };

  const navigate = useNavigate()
  //For Showing Single product
  const ShowProduct = (targetId) => {
    navigate(`/product/${targetId}`);
  };



  const IncriseQuantity = (targetId) => {
    const newCartProduct = [...CartProduct];
    newCartProduct.push(targetId);
    setCartProduct(newCartProduct);

    //For Manage product total Amount after Incrising Quantity
    const RemoveProduct = ProLists.find((item) => {
      return item.id === targetId;
    });

    setTotalAmount((prevValue) => {
      return prevValue + Number.parseInt(RemoveProduct.Amount);
    });
  };

  const DecriseQuantity = (targetId) => {
    const newCartProduct = [...CartProduct];
    const indexToRemove = newCartProduct.findIndex((item) => item === targetId);
    newCartProduct.splice(indexToRemove, 1);
    setCartProduct(newCartProduct);

    //For Manage product total Amount after Incrising Quantity
    const RemoveProduct = ProLists.find((item) => {
      return item.id === targetId;
    });

    setTotalAmount((prevValue) => {
      return prevValue - Number.parseInt(RemoveProduct.Amount);
    });
  };

  return [
    HendleAddToCart,
    ShowProduct,
    HendleRemoveItem,
    IncriseQuantity,
    DecriseQuantity,
  ];
}
