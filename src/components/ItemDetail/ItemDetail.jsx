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
/*
En el componente ItemDetail, cuando se agrega un elemento al carrito (onAdd), estás cambiando el enlace al carrito solo si la cantidad (quantity) es mayor que cero. Esto significa que si haces clic en "Agregar al carrito" desde otro componente y la cantidad inicial es 1, el enlace al carrito no se mostrará.

Para solucionar esto, puedes ajustar la condición en la que decides mostrar el enlace al carrito. En lugar de verificar quantity > 0, puedes verificar si el producto ya está en el carrito. Puedes usar el contexto CartContext para verificar si el producto está en el carrito.

Modifica la parte del código en ItemDetail.js donde decides mostrar el enlace al carrito de la siguiente manera:

<footer className="ItemFooter">
  {quantity > 0 || isInCart(id) ? (
    <Link className="link-carrito" to={`/cart`}>
      ir al carrito
    </Link>
  ) : (
    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
  )}
</footer>
*/
export default ItemDetail;
