import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext ";
import Modal from "./UI/Modal";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { hideCart, showCheckout, progress } = useContext(UserProgressContext);

  const cartTotal = items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.meal.price,
    0
  );

  const handleClose = () => {
    hideCart();
    console.log(progress === "cart");
  };

  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleClose : undefined}
    >
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.meal.id}
            item={item}
            onIncrease={() => addItem(item.meal)}
            onDecrease={() => removeItem(item.meal.id)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleClose}>
          Close
        </Button>
        <Button onClick={showCheckout}>Go to Checkout</Button>
      </p>
    </Modal>
  );
};

export default Cart;
