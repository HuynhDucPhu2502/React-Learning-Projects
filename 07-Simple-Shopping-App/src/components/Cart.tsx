type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  cart: Item[];
  handleUpdateCartItemQuantity: (productId: string, quantity: number) => void;
};

const Cart: React.FC<Props> = ({ cart, handleUpdateCartItemQuantity }) => {
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {cart.length === 0 && <p>No items in cart!</p>}
      {cart.length > 0 && (
        <ul id="cart-items">
          {cart.map((cartItem) => {
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
