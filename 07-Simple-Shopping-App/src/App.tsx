import { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import { PRODUCTS_DATA } from "./products-data";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

function App() {
  const [shoppingCart, setShoppingCart] = useState<Item[]>([]);

  const handleAddItemToCart = (productId: string) => {
    setShoppingCart((prevState) => {
      const updatedItems = [...prevState];
      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = PRODUCTS_DATA.find((item) => item.id === productId);
        if (product === undefined) return prevState;
        updatedItems.push({
          id: productId,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return updatedItems;
    });
  };

  const handleUpdateCartItemQuantity = (
    productId: string,
    quantity: number
  ) => {
    setShoppingCart((prevState) => {
      const updatedItems = [...prevState];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const existingItem = updatedItems[updatedItemIndex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return updatedItems;
    });
  };

  return (
    <>
      <Header
        cart={shoppingCart}
        handleUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop handleAddItemToCart={handleAddItemToCart} />
    </>
  );
}

export default App;
