import React, { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1 className="itemlist-title">{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
