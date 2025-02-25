import classes from "./Cart.module.css";

import Card from "../UI/Card";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Cart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.item.id} cartItem={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
