import { useContext } from "react";
import ShoppingCartContext from "../store/shopping-cart-context";

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

const Cart = () => {
  const { shoppingCart, handleUpdateCartItemQuantity } =
    useContext<ShoppingCartContextType>(ShoppingCartContext);

  const totalPrice = shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {shoppingCart.length === 0 && <p>No items in cart!</p>}
      {shoppingCart.length > 0 && (
        <ul id="cart-items">
          {shoppingCart.map((cartItem) => {
            const formattedPrice = `$${cartItem.price.toFixed(2)}`;

            return (
              <li key={cartItem.id}>
                <div>
                  <span>{cartItem.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() =>
                      handleUpdateCartItemQuantity(cartItem.id, -1)
                    }
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => handleUpdateCartItemQuantity(cartItem.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
};

export default Cart;
