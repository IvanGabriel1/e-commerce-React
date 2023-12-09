import React from "react";
import PropTypes from "prop-types";
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

ItemList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ItemList;
