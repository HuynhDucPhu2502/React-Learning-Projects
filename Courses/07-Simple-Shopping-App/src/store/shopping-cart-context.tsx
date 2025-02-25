import { createContext, useReducer } from "react";
import { PRODUCTS_DATA } from "../products-data";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ShoppingCartContextType = {
  shoppingCart: Item[];
  handleAddItemToCart: (productId: string) => void;
  handleUpdateCartItemQuantity: (productId: string, quantity: number) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType>({
  shoppingCart: [],
  handleAddItemToCart: () => {},
  handleUpdateCartItemQuantity: () => {},
});

type ShoppingCartAction =
  | { type: "ADD_ITEM"; payload: { productId: string } }
  | {
      type: "UPDATE_ITEM_QUANTITY";
      payload: { productId: string; quantity: number };
    };

const shoppingCartReducer = (
  state: Item[],
  action: ShoppingCartAction
): Item[] => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state];
      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = PRODUCTS_DATA.find(
          (item) => item.id === action.payload.productId
        );
        if (product === undefined) return state;
        updatedItems.push({
          id: action.payload.productId,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return updatedItems;
    }
    case "UPDATE_ITEM_QUANTITY": {
      const updatedItems = [...state];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const existingItem = updatedItems[updatedItemIndex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.payload.quantity,
      };

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return updatedItems;
    }

    default:
      return state;
  }
};

export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  const handleAddItemToCart = (productId: string) => {
    dispatch({ type: "ADD_ITEM", payload: { productId } });
  };
  const handleUpdateCartItemQuantity = (
    productId: string,
    quantity: number
  ) => {
    dispatch({
      type: "UPDATE_ITEM_QUANTITY",
      payload: { productId, quantity },
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        handleAddItemToCart,
        handleUpdateCartItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContext;
