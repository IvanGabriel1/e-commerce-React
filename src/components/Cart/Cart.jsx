import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext);
  console.log("Cart: ", cart);

  if (cart.length === 0) {
    return (
      <div>
        <h2>Todavia no agregaste productos</h2>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((prod) => (
          <tr key={prod.id}>
            <td>{prod.name}</td>
            <td>{prod.quantity}</td>
            <td>{prod.price}</td>
            <td>{prod.quantity * prod.price}</td>
            <td>
              <button onClick={() => removeItem(prod.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
      <div>{getTotal()}</div>
      <div>
        <button onClick={() => clearCart()}>Vaciar Carrito</button>
      </div>
    </table>
  );
};

export default Cart;
