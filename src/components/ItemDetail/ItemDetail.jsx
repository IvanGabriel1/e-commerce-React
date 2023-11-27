import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
