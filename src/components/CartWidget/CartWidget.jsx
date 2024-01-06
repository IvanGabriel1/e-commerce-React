import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <div
      style={{
        color: "var(--second-color)",
        fontSize: "1.5em",
        marginRight: "1em",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h4>{getQuantity()}</h4>
      <BsCart4 />
    </div>
  );
};

export default CartWidget;
