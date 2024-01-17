import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import modeloPumba from "../../assets/modelo-pumba.jpg";
import timonPumba from "../../assets/timon-pumba.jpg";
import verano from "../../assets/verano.jpg";
import "./cart.css";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2 className="h2-sin-productos">Todavia no agregaste productos!</h2>
        <Link className="link-a-productos" to="/">
          Ver productos
        </Link>
        <section className="imagenes-container">
          <img src={verano} alt="Bienvenido verano" />
          <img src={modeloPumba} alt="Modelo de pumba" />
          <img src={timonPumba} alt="Timon y Pumba" />
        </section>
      </div>
    );
  }

  return (
    <table className="carrito-table">
      <thead className="carrito-head">
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
          <th>{"🛒"}</th>
        </tr>
      </thead>
      <tbody className="carrito-body">
        {cart.map((prod) => (
          <tr key={prod.id}>
            <td>
              <i>{prod.name} </i>
            </td>
            <td>{prod.quantity}</td>
            <td>${prod.price}</td>
            <td>${prod.quantity * prod.price}</td>
            <td>
              <button
                className="carrito-delete-item"
                onClick={() => removeItem(prod.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="carrito-foot-container">
        <tr className="carrito-foot-tr">
          <td colSpan="3" className="carrito-foot-total">
            <b>
              <u>TOTAL</u>: ${getTotal()}{" "}
            </b>
          </td>

          <td>
            <button className="carrito-clear" onClick={() => clearCart()}>
              <b> Vaciar Carrito </b>
            </button>
          </td>
          <td className="carrito-td-finish">
            <Link className="carrito-finish" to={"/checkout"}>
              <b>Finalizar Compra </b>
            </Link>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Cart;
