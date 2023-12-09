import "./itemDetailContainer.css";
import React, { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {isLoading ? <Spinner /> : <ItemDetail {...product} />}
    </div>
  );
};
/*Cuando haces {...product}, estás tomando todas las propiedades del objeto product y las estás pasando como props individuales al componente ItemDetail.*/
export default ItemDetailContainer;
