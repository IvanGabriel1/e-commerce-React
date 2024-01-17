import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const newObj = { ...item, quantity };

    if (isInCart(newObj.id)) {
      const carritoActualizado = cart.map((el) => {
        if (el.id === newObj.id) {
          el.quantity += newObj.quantity;
        }
        return el;
      });
      setCart(carritoActualizado);
    } else {
      setCart([...cart, newObj]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart([...cartUpdated]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const getTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  const getQuantity = () => {
    let count = 0;
    cart.forEach((el) => {
      count = count + el.quantity;
    });
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
