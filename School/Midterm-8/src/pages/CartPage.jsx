import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export const CartPage = () => {
  const { state, dispatch } = useContext(CartContext);

  return <div className="bg-amber-500">CartPage</div>;
};
