import React, { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const asyncFunc = categoryId ? getProductByCategory : getProducts;
        const response = await asyncFunc(categoryId);
        console.log("Products:", response);
        setProducts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1 className="itemlist-title">{greeting}</h1>
      {isLoading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
