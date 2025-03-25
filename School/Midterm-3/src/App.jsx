import { useReducer } from "react";
import { CartList } from "./components/CartList";
import { Shop } from "./components/Shop";

const intialValue = {
  cart: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const index = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );

      if (index !== -1) {
        const existingItem = state.cart[index];
        const updatedCart = [...state.cart];

        updatedCart[index] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };

        return {
          ...state,
          cart: updatedCart,
          total: state.total + action.payload.gia,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.gia,
        };
      }
    }
    case "REMOVE": {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index === -1) return { ...state };

      const existingItem = state.cart[index];
      if (existingItem.quantity > 1) {
        const updatedCart = [...state.cart];
        updatedCart[index] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };

        return {
          ...state,
          cart: updatedCart,
          total: state.total - existingItem.gia,
        };
      } else {
        const updatedCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: updatedCart,
          total: state.total - existingItem.gia,
        };
      }
    }
    default:
      return { ...state };
  }
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, intialValue);
  console.log(state.cart);
  return (
    <>
      <div className="my-12 w-11/12 mx-auto">
        <CartList data={state.cart} total={state.total} dispatch={dispatch} />
        <Shop dispatch={dispatch} />
      </div>
    </>
  );
}

export default App;
