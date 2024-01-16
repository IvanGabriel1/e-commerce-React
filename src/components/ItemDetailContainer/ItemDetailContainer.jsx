import "./itemDetailContainer.css";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../main";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getProduct = async () => {
      const queryRef = doc(db, "productos", itemId);

      const response = await getDoc(queryRef);

      const newProduct = {
        id: response.id,
        ...response.data(),
      };

      setTimeout(() => {
        setProduct(newProduct);
        setIsLoading(false);
      }, 500);
    };
    getProduct();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {isLoading ? <Spinner /> : <ItemDetail {...product} />}
    </div>
  );
};
/*Cuando haces {...product}, estás tomando todas las propiedades del objeto product y las estás pasando como props individuales al componente ItemDetail.*/
export default ItemDetailContainer;
