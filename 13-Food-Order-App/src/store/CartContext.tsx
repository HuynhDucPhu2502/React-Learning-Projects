import { Item, Meal } from "../types/models";

import { createContext, ReactNode, useReducer } from "react";

type CartContextType = {
  items: Item[];
  addItem: (item: Meal) => void;
  removeItem: (id: string) => void;
  clearItem: () => void;
};

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
});

type cartAction =
  | { type: "ADD"; item: Meal }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" };

const cartReducer = (state: Item[], action: cartAction) => {
  switch (action.type) {
    case "ADD": {
      const existingItemIndex = state.findIndex(
        (item) => item.meal.id === action.item.id
      );

      const updatedItems = [...state];

      if (existingItemIndex > -1) {
        const updatedItem = { ...updatedItems[existingItemIndex] };
        updatedItem.quantity += 1;
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.push({ meal: action.item, quantity: 1 });
      }

      return [...updatedItems];
    }
    case "REMOVE": {
      const existingItemIndex = state.findIndex(
        (item) => item.meal.id === action.id
      );

      const updatedItems = [...state];
      const updatedItem = { ...updatedItems[existingItemIndex] };

      if (updatedItem.quantity > 1) {
        updatedItem.quantity -= 1;
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems.splice(existingItemIndex, 1);
      }

      return [...updatedItems];
    }
    case "CLEAR": {
      return [];
    }
  }
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatchCartAction] = useReducer(cartReducer, [] as Item[]);

  const addItem = (item: Meal) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItem = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const clearItem = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContextValue: CartContextType = {
    items: cartItems,
    addItem,
    removeItem,
    clearItem,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
