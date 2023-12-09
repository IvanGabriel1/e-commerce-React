import React from "react";
import useCounter from "../../hooks/useCounter";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, increment, decrement } = useCounter(initial, stock);

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <div className="controls">
        <button className="button" onClick={decrement}>
          -
        </button>
        <h4 className="number">{count}</h4>
        <button className="button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button className="button" onClick={handleAddToCart} disabled={!stock}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
