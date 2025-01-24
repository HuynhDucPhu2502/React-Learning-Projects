import classes from "./CartItem.module.css";

import { CartItem as ItemInCart } from "../../types/models-type";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

type Props = {
  cartItem: ItemInCart;
};

const CartItem: React.FC<Props> = ({ cartItem }) => {
  const { item, quantity, total } = cartItem;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItemFromCart(item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${item.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
