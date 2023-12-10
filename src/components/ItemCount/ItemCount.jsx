import React from "react";
import useCounter from "../../hooks/useCounter";
import "./itemcount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, increment, decrement } = useCounter(initial, stock);

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count-container">
      <div className="controls">
        <button className="button" onClick={decrement}>
          -
        </button>
        <h4 className="number">{count}</h4>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
      <div className="button-agregar-container">
        <button
          className="button-agregar"
          onClick={handleAddToCart}
          disabled={!stock}
        >
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
