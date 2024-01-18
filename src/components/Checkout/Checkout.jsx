import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../main";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./checkout.css";

const Checkout = () => {
  const initialUserState = {
    nombre: "",
    telefono: "",
    email: "",
    repetirMail: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [formErrors, setFormErrors] = useState({});
  const [orderGenerated, setOrderGenerated] = useState(false);
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const updateUser = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.nombre.trim()) {
      errors.nombre = "Nombre es requerido";
    } else if (!nameRegex.test(user.nombre.trim())) {
      errors.nombre = "Nombre debe contener solo letras";
    }

    if (!user.telefono.trim()) {
      errors.telefono = "Telefono es requerido";
    }

    if (!user.email) {
      errors.email = "Email es requerido";
    } else if (!emailRegex.test(user.email.trim())) {
      errors.email = "Formato de email inválido";
    }

    if (!user.repetirMail) {
      errors.repetirMail = "No coinciden los emails";
    } else if (!emailRegex.test(user.repetirMail.trim())) {
      errors.repetirMail = "Formato de email inválido";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getOrder = async (event) => {
    event.preventDefault();

    const cartTotal = getTotal();

    if (cartTotal === 0) {
      Swal.fire({
        icon: "warning",
        title: "Carrito vacío",
        text: "Agrega productos al carrito antes de confirmar la compra.",
      });
      return;
    }

    const isFormValid = validateForm();

    if (isFormValid) {
      try {
        const match = user.email.trim() === user.repetirMail.trim();

        if (!match) {
          setFormErrors({ repetirMail: "No coinciden los eMail" });
          return;
        }

        const order = {
          buyer: user,
          items: cart,
          total: cartTotal,
        };

        const ordersCollection = collection(db, "orders");
        const docRef = await addDoc(ordersCollection, order);

        setOrderId(docRef.id);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Solicitud Enviada!",
          showConfirmButton: false,
          timer: 1500,
        });

        setUser(initialUserState);
        setFormErrors({});
        setOrderGenerated(true);
        clearCart();
      } catch (error) {
        console.error("Error al agregar la orden:", error);
      }
    }
  };

  return (
    <section className="checkout-container">
      <div className="resumen">
        <header>
          <b>Resumen de compra: $</b>
        </header>
        <div>{getTotal()}</div>
      </div>

      <hr></hr>

      <form className="checkout-form">
        <div className="c-form-nombre">
          <label htmlFor="nombre">
            <b>Nombre: </b>
          </label>
          <input
            type="text"
            placeholder="Ingrese su nombre*"
            name="nombre"
            id="nombre"
            onChange={updateUser}
            value={user.nombre}
          />
          {formErrors.nombre && (
            <span className="error">{formErrors.nombre}</span>
          )}
        </div>
        <div className="c-form-telefono">
          <label htmlFor="telefono">
            <b>Telefono: </b>
          </label>
          <input
            type="number"
            placeholder="Ingrese su telefono*"
            name="telefono"
            id="telefono"
            onChange={updateUser}
            value={user.telefono}
          />
          {formErrors.telefono && (
            <span className="error">{formErrors.telefono}</span>
          )}
        </div>
        <div className="c-form-email">
          <label htmlFor="email">
            <b>Email: </b>
          </label>
          <input
            type="email"
            placeholder="Ingrese su eMail*"
            name="email"
            id="email"
            onChange={updateUser}
            value={user.email}
          />
        </div>
        <div className="c-form-r-email">
          <label htmlFor="repetirMail">
            <b>Repetir Email: </b>
          </label>
          <input
            type="email"
            placeholder="Reingrese su eMail*"
            name="repetirMail"
            id="repetirMail"
            onChange={updateUser}
            value={user.repetirMail}
          />
          {formErrors.repetirMail && (
            <span className="error">{formErrors.repetirMail}</span>
          )}
        </div>

        <button className="c-form-btn-comprar" onClick={getOrder}>
          Confirmar Compra
        </button>
        {orderGenerated && (
          <h2 className="c-form-confirmacion">
            La orden se ha generado correctamente.
            <br></br>
            ID: {orderId}
            <br></br> Gracias por su compra!
          </h2>
        )}
      </form>
    </section>
  );
};

export default Checkout;
