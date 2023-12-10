import React from "react";
import Item from "../Item/Item";
import "./itemlist.css";

const ItemList = ({ products }) => {
  console.log("Products in ItemList:", products);

  return (
    <div className="ListGroup">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
