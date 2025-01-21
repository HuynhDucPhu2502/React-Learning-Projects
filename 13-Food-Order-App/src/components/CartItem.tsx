import { currencyFormatter } from "../util/formatting";
import { Item } from "../types/models";

type Props = {
  item: Item;
  onIncrease: () => void;
  onDecrease: () => void;
};

const CartItem: React.FC<Props> = ({ item, onIncrease, onDecrease }) => {
  return (
    <li className="cart-item">
      <p>
        {item.meal.name} - {item.quantity} x{" "}
        {currencyFormatter.format(item.meal.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
