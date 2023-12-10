import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity);
    console.log("Cantidad agregada desde ItemDetail:", quantity);
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h3 className="ItemHeader">{name}</h3>
      </header>

      <picture className="ImgContainer">
        <img src={img} alt={name} className="ItemImg" />
      </picture>

      <section>
        <p className="Info"> Categoria: {category}</p>
        <p className="Info"> Descripcion: {description}</p>
        <p className="Info"> Price: ${price}</p>
      </section>

      <footer className="ItemFooter">
        {quantity > 0 ? (
          <Link className="link-carrito" to={`/cart`}>
            ir al carrito
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
