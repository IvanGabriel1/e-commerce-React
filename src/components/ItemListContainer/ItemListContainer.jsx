import React, { useEffect, useState } from "react";
import "./itemlistcontainer.css";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../main";
import modeloPumba from "../../assets/modelo-pumba.jpg";
import timonPumba from "../../assets/timon-pumba.jpg";
import verano from "../../assets/verano.jpg";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      const queryRef = !categoryId
        ? collection(db, "productos")
        : query(
            collection(db, "productos"),
            where("category", "==", categoryId)
          );

      const response = await getDocs(queryRef);

      const products = response.docs.map((doc) => {
        const newProduct = {
          ...doc.data(),
          id: doc.id,
        };
        return newProduct;
      });
      setTimeout(() => {
        setProducts(products);
        setIsLoading(false);
      }, 1000);
    };
    getData();
  }, [categoryId]);

  return (
    <div>
      <h1 className="itemlist-title">{greeting}</h1>
      <section className="imagenes-container">
        <img src={verano} alt="Bienvenido verano" />
        <img src={modeloPumba} alt="Modelo de pumba" />
        <img src={timonPumba} alt="Timon y Pumba" />
      </section>
      <hr />
      {isLoading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
