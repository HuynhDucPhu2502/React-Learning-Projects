import { createContext, useState } from "react";

const CartContext = createContext({
  cartItem: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const addItem = (book) => {
    setCartItem((prevCart) => {
      console.log("test");
      const existingItem = prevCart.find((item) => item.id === book.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else return [...prevCart, { ...book, quantity: 1 }];
    });
  };

  const removeItem = (book) => {
    setCartItem((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <CartContext.Provider value={{ cartItem, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
