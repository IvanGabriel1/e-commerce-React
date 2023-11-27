import "./itemcount.css";
import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cont, setCont] = useState(initial);

  const incrementar = () => {
    if (cont < stock) {
      setCont(cont + 1);
    }
  };

  const decrementar = () => {
    if (cont > 1) {
      setCont(cont - 1);
    }
  };

  return (
    <div>
      <div className="controls">
        <button className="button" onClick={decrementar}>
          -
        </button>
        <h4 className="number">{cont}</h4>
        <button className="button" onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => onAdd(cont)}
          disabled={!stock}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
