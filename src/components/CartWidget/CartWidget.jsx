import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <div className="carrito">
      <span className="cart-quantity"> {getQuantity()} </span>
      <BsCart4 />
    </div>
  );
};

export default CartWidget;
