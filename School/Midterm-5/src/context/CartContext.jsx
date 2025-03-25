import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  state: {
    cart: [],
    total: 0,
  },
  dispatch: () => {},
});

const initialState = {
  cart: [],
  total: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        const item = state.cart[index];
        const newCart = [...state.cart];
        newCart[index] = { ...item, quantity: item.quantity + 1 };

        return { ...state, cart: newCart, total: state.total + item.gia };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.gia,
        };
      }
    }
    case "REMOVE": {
      const item = state.cart.find((item) => item.id === action.payload.id);

      if (!item) return { ...state };

      if (item.quantity > 1) {
        const newCart = [...state.cart];
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        newCart[index] = { ...item, quantity: item.quantity - 1 };

        return {
          ...state,
          cart: newCart,
          total: state.total - item.gia,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
          total: state.total - item.gia,
        };
      }
    }
    default:
      return { ...state };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
