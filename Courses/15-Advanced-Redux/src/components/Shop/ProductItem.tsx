import classes from "./ProductItem.module.css";

import { Item } from "../../types/models-type";
import Card from "../UI/Card";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

type Props = {
  item: Item;
};

const ProductItem: React.FC<Props> = ({ item }) => {
  const { title, description, price, id } = item;

  const dispatch = useDispatch();

  const addToCartHandler = (item: Item) => {
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(item)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
