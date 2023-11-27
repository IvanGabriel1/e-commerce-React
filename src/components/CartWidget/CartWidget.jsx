import React from "react";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
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
      <h4>0</h4>
      <BsCart4 />
    </div>
  );
};

export default CartWidget;
