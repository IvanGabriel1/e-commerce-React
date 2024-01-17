import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setQuantity(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <div className="item-detail-container">
      <article className="CardItemDetail">
        <header className="Header">
          <h3 className="ItemHeader">{name}</h3>
        </header>

        <picture className="ImgContainer">
          <img src={img} alt={name} className="ItemImg" />
        </picture>

        <section>
          <p className="Info"> Categoria: {category}</p>
          <p className="Info"> Precio: ${price}</p>
        </section>
      </article>
      <p className="Info description"> Descripcion: {description}</p>
      <div className="ItemCount">
        {quantity > 0 ? (
          <Link className="link-carrito" to={`/cart`}>
            Carrito
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
