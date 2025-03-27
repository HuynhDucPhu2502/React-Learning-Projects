import { useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  state: {
    data: [],
    total: 0,
  },
  dispatch: () => {},
});

export default CartContext;

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const index = state.data.findIndex((x) => x.id === action.payload.id);

      if (index !== -1) {
        const newData = [...state.data];
        let item = newData[index];
        item = { ...item, quantity: item.quantity + 1 };
        newData[index] = item;

        return {
          ...state,
          data: newData,
          total: state.total + item.ticketPrice,
        };
      } else {
        return {
          ...state,
          data: [...state.data, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case "REMOVE": {
      const index = state.data.findIndex((x) => x.id === action.payload.id);
      if (index === -1) return { ...state };
      const item = { ...state.data[index] };

      if (item.quantity > 1) {
        const newData = [...state.data];
        newData[index] = { ...item, quantity: item.quantity - 1 };
        return {
          ...state,
          data: newData,
          total: state.total - item.ticketPrice,
        };
      } else {
        return {
          ...state,
          data: state.data.filter((x) => x.id !== action.payload.id),
          total: state.total - item.ticketPrice,
        };
      }
    }
  }
};

const initialValue = {
  data: [],
  total: 0,
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialValue);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
