import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { CartItem } from "../components/CartItem";

export const CartPage = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="w-11/12 mx-auto">
      {state.cart.map((item) => (
        <CartItem cartItem={item} />
      ))}

      <h3 className="text-3xl font-bold">Tổng tiền: {state.total}</h3>
    </div>
  );
};
